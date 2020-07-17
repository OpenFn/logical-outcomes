//Job to upload CSVs to DHIS2 'REACH' program
alterState((state) => {
  const programMap = {
    'Humanitarian Sexual, Reproductive and Maternal Health (SRMH)':
      '09. HUM: SRMH',
    'Humanitarian A Life Free From Violence (GBV)': '08. HUM: LFFV',
    'Humanitarian Food & Nutrition Security and Resilience to Climate Change':
      '07. HUM: FNSCCR',
    'Humanitarian Access to and Control over Economic Resources':
      '06. HUM: Economic',
    'Humanitarian Other': '10. HUM: Other',
    'Development Sexual, Reproductive and Maternal Health (SRMH)':
      '04. DEV: SRMH',
    'Development A Life Free From Violence (GBV)': '03. DEV: LFFV',
    'Development Food & Nutrition Security and Resilience to Climate Change':
      '02. DEV: FNSCCR',
    'Development Access to and Control over Economic Resources':
      '01. DEV: Economic',
    'Development Other': '05. DEV: Other',
  };

  state.program =
    programMap[`${state.data.csvData.aC1WkFsKqv3}`] ||
    `${state.data.csvData.aC1WkFsKqv3}`;

  return state;
});

createTEI({
  trackedEntityType: 'bsDL4dvl2ni',
  orgUnit: dataValue('csvData.orgUnit')(state), //"vQnvY1o8PHz",
  attributes: [
    {
      attribute: 'INS05jiIWB0', //Col A
      value: dataValue('csvData.Enrollment date')(state), //INS05jiIWB0
    },
    {
      attribute: 'nNbMsTUf3M6', //Col B
      value: dataValue('csvData.nNbMsTUf3M6')(state),
    },
    {
      attribute: 'KoMyxpIXeHp', //Col C
      value: dataValue('csvData.KoMyxpIXeHp')(state),
    },
    {
      attribute: 'plLGWVHIH97', //Col D orgUnit?
      value: dataValue('csvData.orgUnit')(state),
      //value: dataValue("csvData.plLGWVHIH97")(state),
    },
    {
      attribute: 'SgQW3vpnhuL', //Col E
      value: dataValue('csvData.SgQW3vpnhuL')(state),
    },
    {
      attribute: 'gRaQKQpzOMT', //Col F
      value: dataValue('csvData.gRaQKQpzOMT')(state),
    },
    {
      attribute: 'qoDbMxYz38O', //Col G
      value: dataValue('csvData.qoDbMxYz38O')(state),
    },
    {
      attribute: 'aC1WkFsKqv3', //Col H
      //"value": '05. DEV: Other' //<-- desired output when aC1WkFsKqv3=='Development Other'
      value: dataValue('csvData.aC1WkFsKqv3')(state), //Need to transform text to classification code
    },
    {
      attribute: 'E4D2HUQgWdJ', //Col I
      value: dataValue('csvData.E4D2HUQgWdJ')(state).replace(/,/g, ''),
    },
  ],
  //**QUESTION: Do we enroll TEIs?

  //   enrollments: [
  //     {
  //       orgUnit: dataValue("csvData.orgUnit")(state), //"vQnvY1o8PHz",
  //       program: "SHRBw9XXHFk", //Reach Form
  //       programStage: "k5vUtGga5yY", //General Info
  //       enrollmentDate: dataValue("csvData.Enrollment date")(state),
  //       incidentDate: dataValue("csvData.Enrollment date")(state),
  //     },
  //   ],
});
