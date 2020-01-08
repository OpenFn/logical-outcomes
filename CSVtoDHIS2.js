// This will be added to the next release of language-dhis2 as a standard
// helper function.
alterState(state => {
  state.attr = (id, value) => {
    return {
      attribute: id,
      value: value,
    };
  };
  state.boolean = (value) => {
    var val = (value!==undefined? value.toLowerCase() : null);
    return (val==="yes"? true : false);
  };
  /*var head = state.data.csvData.cUqyRxPt1U7;
  var HHhead = (head!==undefined? head.toLowerCase() : null);
  state.HHhead = (HHhead==="yes"? true : false); */
  return state;
});

createTEI({
  trackedEntityType: 'MCPQUTHX1Ze', // Should this be hardcoded?
  orgUnit: dataValue('csvData.Org Unit UID')(state),
  attributes: state => [
    //state.attr('C1O4lnx0Ibz', state.data.csvData.PARTNER), //Partner category
    state.attr('bnQOk4Plo9Z', state.data.csvData.bnQOk4Plo9Z), //UTNWF Staff
    state.attr('TLjYqcKwhxP', state.data.csvData.TLjYqcKwhxP), //Beneficiary Name
    state.attr('ScSWoiqvdp5', state.data.csvData.ScSWoiqvdp5), //ID No
    state.attr('j38AUmNNy18', state.data.csvData.j38AUmNNy18), //Age
    state.attr('F2FjwHE7MTs', state.data.csvData.F2FjwHE7MTs), //Sex
    state.attr('g5QDO6GPgiJ', state.data.csvData.g5QDO6GPgiJ), //Telephone
    state.attr('zC1KsiGDVMk', state.data.csvData.zC1KsiGDVMk), //Village
    //state.attr('cUqyRxPt1U7', state.data.csvData.cUqyRxPt1U7), //Household head --> wrong Id, CONVERT TO BOOLEAN
    //state.attr('cUqyRxPt1U7', state.HHhead)
    state.attr('cUqyRxPt1U7', state.boolean('state.data.csvData.cUqyRxPt1U7'))
  ],
  enrollments: [
    {
      program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN?
      programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN?
      orgUnit: dataValue('csvData.Org Unit UID')(state),
      enrollmentDate: dataValue('csvData.START DATE (MM/YY)')(state).toString().replace(/\//g,"-"),
      incidentDate: dataValue('csvData.START DATE (MM/YY)')(state).toString().replace(/\//g,"-"),
      events: [
        {
          program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN??
          programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN?
          orgUnit: dataValue('csvData.Org Unit UID')(state),
          eventDate: dataValue('csvData.START DATE (MM/YY)')(state),
          status: 'COMPLETED',
          storedBy: 'Test',
          orgUnitName: dataValue('csvData.Org unit')(state),
          attributeCategoryOptions: 'vwGC12Ipn10',
          optionSize: 0,
          attributeOptionCombo: 'C1O4lnx0Ibz',
          coordinate: {
            latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
            longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
          },
          dataValues: [
          {
            dataElement: 'vAh7VEB6L0f',
            value: state => {
              var value = dataValue('csvData.vAh7VEB6L0f')(state);
              var val = (value!==undefined? value.toLowerCase() : null);
              return (val==="yes"? true : false);
            }
          },
        ],
        }]
    },
  ],
  
});
