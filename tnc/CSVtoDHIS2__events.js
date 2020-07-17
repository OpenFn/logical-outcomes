get(
  //'https://utnwf.or.ke/api/29/trackedEntityInstances/query.json',
  'https://dev.tnc.logicaloutcomes.net/api/29/trackedEntityInstances/query.json', //LO Test Env
  //'/trackedEntityInstances/query.json',
  {
    query: {
      ou: 'e5CYXI5Ncay',
      ouMode: 'ACCESSIBLE',
      program: 'NGtZYxE0zFM',
      filter: `nvn9I8VnPgz:LIKE:${state.data.csvData.nvn9I8VnPgz}`, //query existing TEIs using the Unique Id
      //filter: `TLjYqcKwhxP:LIKE:${state.data.csvData.TLjYqcKwhxP}`, //old filter by Name
      pageSize: 50,
      page: 1,
      totalPages: true,
    },
  },
  state => {
    const row1 = state.data.rows[0];
    state.tei = row1 ? row1[0] : '';
    //state.tei = row1 ? '/' + row1[0] + '?strategy=CREATE_AND_UPDATE' : '';
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
    //Create 2 Events
      events:  [
          {
            //Event #1
            trackedEntityInstance: `${state.tei}`,
            program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN
            programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN
            orgUnit: dataValue('csvData.Org Unit UID')(state),
            eventDate: state.dateConvert(
              dataValue('csvData.START DATE (MM/YY)')(state)
            ),
            status: 'COMPLETED',
            storedBy: 'Test',
            orgUnitName: dataValue('csvData.Org unit')(state),
            attributeCategoryOptions: dataValue('csvData.Category option UID')(
              state
            ),
            optionSize: 0,
            attributeOptionCombo: 'C1O4lnx0Ibz',
            coordinate: {
              latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
              longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
            },
            dataValues: [
              {
                //Col Q
                dataElement: 'vAh7VEB6L0f',
                value: state.boolean(dataValue('csvData.vAh7VEB6L0f')(state)),
              },
              {
                //Col R
                dataElement: 'IyW6h3oi1Gd',
                value: dataValue('csvData.IyW6h3oi1Gd')(state),
              },
              {
                //Col S
                dataElement: 'LZ0FOPRvtdm',
                value: state.boolean(dataValue('csvData.LZ0FOPRvtdm')(state)),
              }
            ],
          },
          {
            //Event #2
            trackedEntityInstance: `${state.tei}`,
            program: 'NGtZYxE0zFM',
            programStage: 'XjDnSd7whRX', //TECHNOLOGY ADOPTION
            orgUnit: dataValue('csvData.Org Unit UID')(state),
            eventDate: state.dateConvert(
              dataValue('csvData.START DATE (MM/YY)')(state)
            ),
            status: 'COMPLETED',
            storedBy: 'Test',
            orgUnitName: dataValue('csvData.Org unit')(state),
            attributeCategoryOptions: dataValue('csvData.Category option UID')(
              state
            ),
            optionSize: 0,
            attributeOptionCombo: 'C1O4lnx0Ibz',
            coordinate: {
              latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
              longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
            },
            dataValues: [
              //Select Technology mappings
              {
                //1
                dataElement: 'v0BrGE6G7AQ',
                value: (state) => {
                  var value = dataValue('csvData.v0BrGE6G7AQ')(state);
                  return (value===true? true : '');
                },
              },
              {
                //2
                dataElement: 'EEZzeoqGAnw',
                value: (state) => {
                  var value = dataValue('csvData.EEZzeoqGAnw')(state);
                  return (value===true? true : '');
                },
              },
              {
                //3
                dataElement: 'W7BZ5guSSNo',
                value: (state) => {
                  var value = dataValue('csvData.W7BZ5guSSNo')(state);
                  return (value===true? true : '');
                },
              },
              {
                //4
                dataElement: 'gMhSEmk7iWS',
                value: (state) => {
                  var value = dataValue('csvData.gMhSEmk7iWS')(state);
                  return (value===true? true : '');
                },
              },
              {
                //5
                dataElement: 'jISuVoGSmqO',
                value: (state) => {
                  var value = dataValue('csvData.jISuVoGSmqO')(state);
                  return (value===true? true : '');
                },
              },
              {
                //6
                dataElement: 'KpEeTQLF48d',
                value: (state) => {
                  var value = dataValue('csvData.KpEeTQLF48d')(state);
                  return (value===true? true : '');
                },
              },
              {
                //7
                dataElement: 'kGjccxB7FwQ',
                value: (state) => {
                  var value = dataValue('csvData.kGjccxB7FwQ')(state);
                  return (value===true? true : '');
                },
              },
              /////
              {
                //Col T
                dataElement: 'kP5o7Ud1Vd4',
                value: dataValue('csvData.kP5o7Ud1Vd4')(state),
              },
              {
                //Col U
                dataElement: 'uFUTTqkEVtz',
                value: dataValue('csvData.uFUTTqkEVtz')(state),
              },
              {
                //Col V
                dataElement: 'JIb0HKi7MLq',
                value: dataValue('csvData.JIb0HKi7MLq')(state),
              },
              {
                //Col W
                dataElement: 'x7X1y7b4tAu',
                value: dataValue('csvData.x7X1y7b4tAu')(state),
              },
              {
                //Col X
                dataElement: 'VMyJ10uue3t',
                value: state.dateConvert(
                  dataValue('csvData.VMyJ10uue3t')(state)
                ),
              },
              {
                //Col Y
                dataElement: 'yH9GVEG6Pya',
                value: dataValue('csvData.yH9GVEG6Pya')(state),
              },
              {
                //Col Z
                dataElement: 'k7ZrxD00oTk',
                value: dataValue('csvData.k7ZrxD00oTk')(state),
              },
              {
                //Col AA
                dataElement: 'wvKDeTzKnOw',
                value: dataValue('csvData.wvKDeTzKnOw')(state),
              },
              {
                //Col AB
                dataElement: 'fohag7LHogI',
                value: dataValue('csvData.fohag7LHogI')(state),
              },
              {
                //Col AC
                dataElement: 'gkFvMlQR7mD',
                value: state.dateConvert(
                  dataValue('csvData.gkFvMlQR7mD')(state)
                ),
              },
              {
                //Col AD
                dataElement: 'GUjfts8o2I3',
                value: dataValue('csvData.GUjfts8o2I3')(state),
              },
              {
                //Col AE
                dataElement: 'oiiWce30HFA',
                value: dataValue('csvData.oiiWce30HFA')(state),
              },
              {
                //Col AF
                dataElement: 'RJDAG9P1o68',
                value: dataValue('csvData.RJDAG9P1o68')(state),
              },
              {
                //Col AG
                dataElement: 'Vl0MZ8bG3Mj',
                value: dataValue('csvData.Vl0MZ8bG3Mj')(state),
              },
              {
                //Col AH
                dataElement: 'ZH28Ef03rWf',
                value: state.dateConvert(
                  dataValue('csvData.ZH28Ef03rWf')(state)),
              },
              {
                //Col AI
                dataElement: 'NgIYWTQIG1k',
                value: dataValue('csvData.NgIYWTQIG1k')(state),
              },
              {
                //Col AJ
                dataElement: 'bnpFpibSHTZ',
                value: dataValue('csvData.bnpFpibSHTZ')(state),
              },
              {
                //Col AK
                dataElement: 'JE8QDXFNPQ3',
                value: dataValue('csvData.JE8QDXFNPQ3')(state),
              },
              {
                //Col AL
                dataElement: 'IXBQ9iyOsj7',
                value: state.dateConvert(
                  dataValue('csvData.IXBQ9iyOsj7')(state)
                ),
              },
              {
                //Col AM
                dataElement: 'CdGdpMnhq9N',
                value: dataValue('csvData.CdGdpMnhq9N')(state),
              },
              {
                //Col AN
                dataElement: 'CDK1lWPutjS',
                value: dataValue('csvData.CDK1lWPutjS')(state),
              },
              {
                //Col AO
                dataElement: 'yoS2hi15LNw',
                value: dataValue('csvData.yoS2hi15LNw')(state),
              },
              {
                //Col AP
                dataElement: 'wIora0v6L1w',
                value: state.dateConvert(
                  dataValue('csvData.wIora0v6L1w')(state)
                ),
              },
              {
                //Col AQ
                dataElement: 'lSgPvELDL1f',
                value: dataValue('csvData.lSgPvELDL1f')(state),
              },
              {
                //Col AR
                dataElement: 't65Q6g7ZyDH',
                value: dataValue('csvData.t65Q6g7ZyDH')(state),
              },
              {
                //Col AS
                dataElement: 'dtgxdpuv1gi',
                value: state.dateConvert(
                  dataValue('csvData.dtgxdpuv1gi')(state)
                ),
              },
              {
                //Col AT
                dataElement: 'YZXBjzU3qq6',
                value: dataValue('csvData.YZXBjzU3qq6')(state),
              },
              {
                //Col AU
                dataElement: 'y7ffvo37Unv',
                value: dataValue('csvData.y7ffvo37Unv')(state),
              },
              {
                //Col AV
                dataElement: 'LmWgNlOgEmJ',
                value: state.dateConvert(
                  dataValue('csvData.LmWgNlOgEmJ')(state)
                ),
              },
              {
                //Col AW
                dataElement: 'iADbtBlMxTs',
                value: dataValue('csvData.iADbtBlMxTs')(state),
              },
              {
                //Col AX
                dataElement: 'sYUhjK3UdP1',
                value: dataValue('csvData.sYUhjK3UdP1')(state),
              },
              {
                //Col AY
                dataElement: 'l4pKaxmLOrW',
                value: state.dateConvert(
                  dataValue('csvData.l4pKaxmLOrW')(state)
                ),
              },
              {
                //Col AZ
                dataElement: 'otlK2nqPJd1',
                value: dataValue('csvData.otlK2nqPJd1')(state),
              },
              {
                //Col BA
                dataElement: 'frjA2JXh9cY',
                value: dataValue('csvData.frjA2JXh9cY')(state),
              },
              {
                //Col BB
                dataElement: 'Eh89gu65Xnd',
                value: state.dateConvert(
                  dataValue('csvData.Eh89gu65Xnd')(state)
                ),
              },
              {
                //Col BC
                dataElement: 'I3mYNeMDixy',
                value: dataValue('csvData.I3mYNeMDixy')(state),
              },
              {
                //Col BD
                dataElement: 'fK3Pqv7IWo7',
                value: dataValue('csvData.fK3Pqv7IWo7')(state),
              },
              {
                //Col BE
                dataElement: 'PrPEHhALnzl',
                value: state.dateConvert(
                  dataValue('csvData.PrPEHhALnzl')(state)
                ),
              },
              {
                //Col BF
                dataElement: 'Nh894w42Ti4',
                value: dataValue('csvData.Nh894w42Ti4')(state),
              },
              {
                //Col BG
                dataElement: 'mZrNVMSr9QN',
                value: dataValue('csvData.mZrNVMSr9QN')(state),
              },
              {
                //Col BH
                dataElement: 'TVsbvQkpi17',
                value: dataValue('csvData.TVsbvQkpi17')(state),
              },
              {
                //Col BI
                dataElement: 'ldl5hinz5TC',
                value: dataValue('csvData.ldl5hinz5TC')(state),
              },
              {
                //Col BJ
                dataElement: 'mwNDjqVe6C2',
                value: dataValue('csvData.mwNDjqVe6C2')(state),
              },
              {
                //Col BK
                dataElement: 'ylfCWUBbiZk',
                value: state.dateConvert(
                  dataValue('csvData.ylfCWUBbiZk')(state)
                ),
              },
              {
                //Col BL
                dataElement: 'jpS0aEcFGy8',
                value: dataValue('csvData.jpS0aEcFGy8')(state),
              },
              {
                //Col BM
                dataElement: 'LzIigcjxapS',
                value: dataValue('csvData.LzIigcjxapS')(state),
              },
              {
                //Col BN
                dataElement: 'VOgnzzSuYZX',
                value: state.dateConvert(
                  dataValue('csvData.VOgnzzSuYZX')(state)
                ),
              },
              {
                //Col BO
                dataElement: 'YdBzuMj0CSh',
                value: dataValue('csvData.YdBzuMj0CSh')(state),
              },
              {
                //Col BP
                dataElement: 'XmM7gBcfg6P',
                value: dataValue('csvData.XmM7gBcfg6P')(state),
              },
              {
                //Col BQ
                dataElement: 'HN09RtK91MC',
                value: state.dateConvert(
                  dataValue('csvData.HN09RtK91MC')(state)
                ),
              },
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
  method: 'POST',
  //method: state => (state.tei ? 'PUT' : 'POST'),
  url: state =>
    //`https://utnwf.or.ke/api/29/trackedEntityInstances${state.tei}`,
    `https://dev.tnc.logicaloutcomes.net/api/29/events`,
  json: state => state.body,
});
