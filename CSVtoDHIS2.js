createTEI(
  fields(
    field("trackedEntityType", dataValue("trackedEntity")(state)),
    field("orgUnit", dataValue("csvData.Org Unit UID")(state)),
    field("attributes", function(state){
      return [{
          "C1O4lnx0Ibz": dataValue("PARTNER")(state), //Partner category
          "bnQOk4Plo9Z": dataValue("bnQOk4Plo9Z")(state), //UTNWF Staff
          "TLjYqcKwhxP": dataValue("TLjYqcKwhxP")(state), //Beneficiary Name
          "ScSWoiqvdp5": dataValue("ScSWoiqvdp5")(state), //ID No
          "j38AUmNNy18": dataValue("j38AUmNNy18")(state), //Age
          "F2FjwHE7MTs": dataValue("F2FjwHE7MTs")(state), //Sex
          "g5QDO6GPgiJ": dataValue("g5QDO6GPgiJ")(state), //Telephone
          "zC1KsiGDVMk": dataValue("zC1KsiGDVMk")(state), //Village
          "cUqyRxPt1U7": dataValue("cUqyRxPt1U7")(state) //Household head --> wrong Id, CONVERT TO BOOLEAN
      }]
  }),
    field("enrollments", function(state){
     return [{
       "program": "NGtZYxE0zFM", //FARM SPECIFIC ACTION PLAN?
       "programStage": "wewcqVyGL5z", //FARM SPECIFIC ACTION PLAN?
       "orgUnit": dataValue("csvData.Org Unit UID")(state),
       "enrollmentDate": dataValue("START DATE (MM/YY)")(state),
       "incidentDate": dataValue("START DATE (MM/YY)")(state)
     }]
   })
  )
),
event(
  fields(
    field("program", "NGtZYxE0zFM"), //FARM SPECIFIC ACTION PLAN??
    field("programStage", "wewcqVyGL5z"), //FARM SPECIFIC ACTION PLAN?
    field("orgUnit", dataValue("csvData.Org Unit UID")(state)),
    field("eventDate", dataValue("START DATE (MM/YY)"))(state),
    field("status", "COMPLETED"),
    field("storedBy", "Test"),
    field("orgUnitName", dataValue("Org unit")(state)),
    field("attributeCategoryOptions", "vwGC12Ipn10"),
    field("optionSize",0),
    field("attributeOptionCombo","C1O4lnx0Ibz"),
    field("coordinate", {
      "latitude": dataValue("LATITUDE (NORTH+/ SOUTH-)")(state),
      "longitude": dataValue("LATITUDE (EAST/ WEST)")(state)
    }),
    field("dataValues", function(state){
      return [{
        "dataElement": "vAh7VEB6L0f",
        "value": dataValue("vAh7VEB6L0f")(state)
      }]
    })
  )
)
