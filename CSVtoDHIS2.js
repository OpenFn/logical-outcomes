// This will be added to the next release of language-dhis2 as a standard
// helper function.
alterState(state => {
  state.attr = (id, value) => {
    return {
      attribute: id,
      value: value,
    };
  };
  return state;
});

createTEI({
  trackedEntityType: dataValue('trackedEntity')(state),
  orgUnit: dataValue('csvData.Org Unit UID')(state),
  attributes: state => [
    state.attr('C1O4lnx0Ibz', state.data.csvData.PARTNER), //Partner category
    state.attr('bnQOk4Plo9Z', state.data.csvData.bnQOk4Plo9Z), //UTNWF Staff
    state.attr('TLjYqcKwhxP', state.data.csvData.TLjYqcKwhxP), //Beneficiary Name
    state.attr('ScSWoiqvdp5', state.data.csvData.ScSWoiqvdp5), //ID No
    state.attr('j38AUmNNy18', state.data.csvData.j38AUmNNy18), //Age
    state.attr('F2FjwHE7MTs', state.data.csvData.F2FjwHE7MTs), //Sex
    state.attr('g5QDO6GPgiJ', state.data.csvData.g5QDO6GPgiJ), //Telephone
    state.attr('zC1KsiGDVMk', state.data.csvData.zC1KsiGDVMk), //Village
    state.attr('cUqyRxPt1U7', state.data.csvData.cUqyRxPt1U7), //Household head --> wrong Id, CONVERT TO BOOLEAN
  ],
  enrollments: [
    {
      program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN?
      programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN?
      orgUnit: dataValue('csvData.Org Unit UID')(state),
      enrollmentDate: dataValue('csvData.START DATE (MM/YY)')(state),
      incidentDate: dataValue('csvData.START DATE (MM/YY)')(state),
    },
  ],
});

event({
  program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN??
  programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN?
  orgUnit: dataValue('csvData.Org Unit UID')(state),
  eventDate: dataValue('START DATE (MM/YY)')(state),
  status: 'COMPLETED',
  storedBy: 'Test',
  orgUnitName: dataValue('Org unit')(state),
  attributeCategoryOptions: 'vwGC12Ipn10',
  optionSize: 0,
  attributeOptionCombo: 'C1O4lnx0Ibz',
  coordinate: {
    latitude: dataValue('LATITUDE (NORTH+/ SOUTH-)')(state),
    longitude: dataValue('LATITUDE (EAST/ WEST)')(state),
  },
  dataValues: [
    {
      dataElement: 'vAh7VEB6L0f',
      value: dataValue('vAh7VEB6L0f')(state),
    },
  ],
});
