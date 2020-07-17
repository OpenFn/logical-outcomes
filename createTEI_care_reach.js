createTEI({
  trackedEntityType: "bsDL4dvl2ni",
  orgUnit: dataValue("csvData.orgUnit")(state), //"vQnvY1o8PHz",
  attributes: [
    {
      attribute: "INS05jiIWB0", //Col A
      value: dataValue("csvData.Enrollment date")(state), //INS05jiIWB0
    },
    {
      attribute: "nNbMsTUf3M6", //Col B
      value: dataValue("csvData.nNbMsTUf3M6")(state),
    },
    {
      attribute: "KoMyxpIXeHp", //Col C
      value: dataValue("csvData.KoMyxpIXeHp")(state),
    },
    {
      attribute: "plLGWVHIH97", //Col D orgUnit?
      value: dataValue("csvData.orgUnit")(state),
      //value: dataValue("csvData.plLGWVHIH97")(state),
    },
    {
      attribute: "SgQW3vpnhuL", //Col E
      value: dataValue("csvData.SgQW3vpnhuL")(state),
    },
    {
      attribute: "gRaQKQpzOMT", //Col F
      value: dataValue("csvData.gRaQKQpzOMT")(state),
    },
    {
      attribute: "qoDbMxYz38O", //Col G
      value: dataValue("csvData.qoDbMxYz38O")(state),
    },
    {
      attribute: "aC1WkFsKqv3", //Col H
      //"value": '04. DEV: SRMH' //Program Classification Type --> Is this text or code? 
      value: dataValue("csvData.aC1WkFsKqv3")(state), //ERROR: Need to specify choice codes
    },
    {
      attribute: "E4D2HUQgWdJ", //Col I
      value: dataValue("csvData.E4D2HUQgWdJ")(state).replace(/,/g, ""),
    },
  ],
  enrollments: [
    {
      orgUnit: dataValue("csvData.orgUnit")(state),//"vQnvY1o8PHz",
      program: "SHRBw9XXHFk", //Reach Form
      programStage: "k5vUtGga5yY", //General Info
      enrollmentDate: dataValue("csvData.Enrollment date")(state),
      incidentDate: dataValue("csvData.Enrollment date")(state),
    },
  ],
});
