//DEP draft job based on tnc job
get(
  'https://dev.piirs.care.org/api/29/trackedEntityInstances/query.json',
  
  {
    query: {
      ou: 'vQnvY1o8PHz', //vQnvY1o8PHz //
      ouMode: 'ACCESSIBLE',
      program: 'SHRBw9XXHFk',
      filter: `SgQW3vpnhuL:LIKE:${state.data.csvData.SgQW3vpnhuL}`, //query existing TEIs using the Unique Id
      //filter: `TLjYqcKwhxP:LIKE:${state.data.csvData.TLjYqcKwhxP}`, //old filter by Name
      pageSize: 50,
      page: 1,
      totalPages: true,
    },
  },
  state => {
    const row1 = state.data.rows[0];
    state.tei = row1 ? '/' + row1[0] + '?strategy=CREATE_AND_UPDATE' : '';
    console.log(`Searched for existing TEI: ${state.tei}`);
    return state;
  }
);
alterState(state => {
  // Note: we don't care about anything in the response except the TEI id, so we
  // restore state.data to the initial csvData here.
  state.data = state.references[0];
  state.boolean = value => {
    //transform yes/no to boolean
    var val = value !== undefined ? value.toString().toLowerCase() : '';
    var newVal = '';
    if (val !==null && val.trim()==='yes'){
      newVal = true;
    } else if ( val!==null && val.trim()==='no'){
      newVal = false;
    }
    return newVal;
  };
  state.attr = (id, value) => {
    // return attribute set with value
    return {
      attribute: id,
      value: value,
    };
  };
  state.dateConvert = value => {
    var dateArr = value ? value.split('/') : null;
    if (!dateArr) {
      return '';
    }
    const mm = dateArr[0] < 10 ? '0' + dateArr[0] : dateArr[0];
    const dd = dateArr[1] < 10 ? '0' + dateArr[1] : dateArr[1];
    var newDate = dateArr[2] + '-' + mm + '-' + dd;
    //var newDate = '20' + dateArr[2] + '-' + mm + '-' + dd;
    return newDate;
  };
  state.body = {
    //CREATE TEI
    trackedEntityType: 'bsDL4dvl2ni',
    orgUnit: 'vQnvY1o8PHz', //'state.data.csvData['Country']',
    attributes: [
      //state.attr('C1O4lnx0Ibz', state.data.csvData.PARTNER), //Partner category
      
    ],
    enrollments: [
      {
        program: 'SHRBw9XXHFk',
        //programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN?
        orgUnit: 'vQnvY1o8PHz',
        enrollmentDate: state.dateConvert(
          dataValue('csvData.Enrollment date')(state)
        ),
        incidentDate: state.dateConvert(
          dataValue('csvData.Event date')(state)
        ),
        events: [
          {
            //Event #1
            program: 'SHRBw9XXHFk', 
            //programStage: 'wewcqVyGL5z', 
            orgUnit: 'vQnvY1o8PHz',
            eventDate: state.dateConvert(
              dataValue('csvData.Enrollment date')(state)
            ),
            status: 'COMPLETED',
            storedBy: 'Test',
            orgUnitName: dataValue('csvData.Org unit')(state),
            /*attributeCategoryOptions: dataValue('csvData.Category option UID')(
              state
            ),*/
            optionSize: 0,
            /*attributeOptionCombo: 'C1O4lnx0Ibz',
            coordinate: {
              latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
              longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
            },*/
            dataValues: [
              {
                //Col K
                dataElement: 'mIJDiYz94qV',
                value: dataValue('csvData.mIJDiYz94qV')(state),
              },
              {
                //Col L
                dataElement: 'ICsPcYnp699',
                value: dataValue('csvData.ICsPcYnp699')(state),
              },
              {
                //Col M
                dataElement: 'KGSeDVm5WXi',
                value: dataValue('csvData.KGSeDVm5WXi')(state),
              },
              {
                //Col N
                dataElement: 'Vq1UjWgcVPR',
                value: dataValue('csvData.Vq1UjWgcVPR')(state),
              },
              {
                //Col O
                dataElement: 'qaiWE42he2W',
                value: dataValue('csvData.qaiWE42he2W')(state),
              },
              {
                //Col P
                dataElement: 'iC0QRnbMpH1',
                value: dataValue('csvData.iC0QRnbMpH1')(state),
              },
              {
                //Col Q
                dataElement: 'KO8RH3BEcIq',
                value: dataValue('csvData.KO8RH3BEcIq')(state),
              },
              {
                //Col R
                dataElement: 'XwGuR1yrQ47',
                value: dataValue('csvData.XwGuR1yrQ47')(state),
              },
              {
                //Col S
                dataElement: 'AouFSwJDulc',
                value: dataValue('csvData.AouFSwJDulc')(state),
              },
              {
                //Col T
                dataElement: 'IkCHJg0Iz16',
                value: dataValue('csvData.IkCHJg0Iz16')(state),
              },
              {
                //Col U
                dataElement: 'J9TZYmO460c',
                value: dataValue('csvData.J9TZYmO460c')(state),
              }
            ],
          }
            ],
          },
        ],
      };
      return state;
  });
request({
  auth: {
    user: state.configuration.username,
    pass: state.configuration.password,
  },
  method: state => (state.tei ? 'PUT' : 'POST'),
  url: state =>
    `https://dev.piirs.care.org/api/29/trackedEntityInstances${state.tei}`,
  json: state => state.body,
});
