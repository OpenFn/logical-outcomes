//OLD job --> before upload requirements changes
createTEI({
  trackedEntityType: "bsDL4dvl2ni",
  orgUnit: "vQnvY1o8PHz",
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
      attribute: "plLGWVHIH97", //Col D
      value: dataValue("csvData.plLGWVHIH97")(state),
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
      //"value": '04. DEV: SRMH' //hardcoding value because of issue with options
      value: dataValue("csvData.aC1WkFsKqv3")(state), //ERROR: Need to specify choice codes
    },
    {
      attribute: "E4D2HUQgWdJ", //Col I
      value: dataValue("csvData.E4D2HUQgWdJ")(state).replace(/,/g, ""),
    },
  ],
  enrollments: [
    {
      orgUnit: "vQnvY1o8PHz",
      program: "SHRBw9XXHFk", //Reach Form
      programStage: "k5vUtGga5yY", //General Info
      enrollmentDate: dataValue("csvData.Enrollment date")(state),
      incidentDate: dataValue("csvData.Enrollment date")(state),
      events: [
        {
          program: "SHRBw9XXHFk", //Reach Form
          programStage: "k5vUtGga5yY", //General Info
          orgUnit: "vQnvY1o8PHz",
          eventDate: dataValue("csvData.Event date")(state),
          status: "COMPLETED",
          storedBy: "aleksa@openfn.org",
          //orgUnitName: dataValue('csvData.Org unit')(state),
          dataValues: [
            {
              //Col K
              dataElement: "mIJDiYz94qV",
              value: dataValue("csvData.mIJDiYz94qV")(state),
            },
            {
              //Col L
              dataElement: "ICsPcYnp699",
              value: dataValue("csvData.ICsPcYnp699")(state),
            },
            {
              //Col M
              dataElement: "KGSeDVm5WXi",
              value: dataValue("csvData.KGSeDVm5WXi")(state),
            },
            {
              //Col N
              dataElement: "Vq1UjWgcVPR",
              value: dataValue("csvData.Vq1UjWgcVPR")(state),
            },
            {
              //Col O
              dataElement: "qaiWE42he2W",
              value: dataValue("csvData.qaiWE42he2W")(state),
            },
            {
              //Col P
              dataElement: "iC0QRnbMpH1",
              value: dataValue("csvData.iC0QRnbMpH1")(state),
            },
            {
              //Col Q
              dataElement: "KO8RH3BEcIq",
              value: dataValue("csvData.KO8RH3BEcIq")(state),
            },
            {
              //Col R
              dataElement: "XwGuR1yrQ47",
              value: dataValue("csvData.XwGuR1yrQ47")(state),
            },
            {
              //Col S
              dataElement: "AouFSwJDulc",
              value: dataValue("csvData.AouFSwJDulc")(state),
            },
            {
              //Col T
              dataElement: "IkCHJg0Iz16",
              value: dataValue("csvData.IkCHJg0Iz16")(state),
            },
            {
              //Col U
              dataElement: "J9TZYmO460c",
              value: dataValue("csvData.J9TZYmO460c")(state),
            },
          ],
        },
      ],
    },
  ],
});
