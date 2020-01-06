createTEI({
  trackedEntityType: dataValue('trackedEntity')(state),
  orgUnit: dataValue('csvData.Org Unit UID')(state),
  attributes: [
    {
      C1O4lnx0Ibz: dataValue('csvData.PARTNER')(state), //Partner category
      bnQOk4Plo9Z: dataValue('csvData.bnQOk4Plo9Z')(state), //UTNWF Staff
      TLjYqcKwhxP: dataValue('csvData.TLjYqcKwhxP')(state), //Beneficiary Name
      ScSWoiqvdp5: dataValue('csvData.ScSWoiqvdp5')(state), //ID No
      j38AUmNNy18: dataValue('csvData.j38AUmNNy18')(state), //Age
      F2FjwHE7MTs: dataValue('csvData.F2FjwHE7MTs')(state), //Sex
      g5QDO6GPgiJ: dataValue('csvData.g5QDO6GPgiJ')(state), //Telephone
      zC1KsiGDVMk: dataValue('csvData.zC1KsiGDVMk')(state), //Village
      cUqyRxPt1U7: dataValue('csvData.cUqyRxPt1U7')(state), //Household head --> wrong Id, CONVERT TO BOOLEAN
    },
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
