createTEI(
  field("trackedEntityType", dataValue("trackedEntity")(state)),
  field("orgUnit", dataValue("csvData.Org Unit UID")(state)),
  field("attributes", function(state){
    return [
      field("C1O4lnx0Ibz", dataValue("PARTNER")(state)), //Partner cat
      field("bnQOk4Plo9Z", dataValue("bnQOk4Plo9Z")(state)), //UTNWF Staff
      field("TLjYqcKwhxP", dataValue("TLjYqcKwhxP")(state)), //Beneficiary Name
      field("ScSWoiqvdp5", dataValue("ScSWoiqvdp5")(state)), //ID No
      field("j38AUmNNy18", dataValue("j38AUmNNy18")(state)), //Age
      field("F2FjwHE7MTs", dataValue("F2FjwHE7MTs")(state)), //Sex
      field("F2FjwHE7MTs", dataValue("g5QDO6GPgiJ")(state)), //Telephone
      field("F2FjwHE7MTs", dataValue("zC1KsiGDVMk")(state)), //Village
      field("F2FjwHE7MTs", dataValue("yF9ytRRv4qY")(state)) //Household head name
    ]
  }),
  field("enrollments", function(state){
    return [
      field("program", "NGtZYxE0zFM"), //FARM SPECIFIC ACTION PLAN?
      field("orgUnit", dataValue("csvData.Org Unit UID")(state)),
      field("enrollmentDate", dataValue("START DATE (MM/YY)")(state)),
      field("incidentDate", dataValue("START DATE (MM/YY)")(state))
    ]
  })
),
event(
  fields(
    field("program", "NGtZYxE0zFM"), //FARM SPECIFIC ACTION PLAN??
    field("orgUnit", dataValue("csvData.Org Unit UID")(state)),
    field("eventDate", dataValue("START DATE (MM/YY)"))(state),
    field("status", "COMPLETED"),
    field("storedBy", "admin"),
    field("coordinate", {
      "latitude": dataValue("LATITUDE (NORTH+/ SOUTH-)")(state),
      "longitude": dataValue("LATITUDE (EAST/ WEST)")(state)
    }),
    field("attributes", function(state){
      return [
        field("C1O4lnx0Ibz", dataValue("PARTNER")(state))
      ]
    })
  )
)
