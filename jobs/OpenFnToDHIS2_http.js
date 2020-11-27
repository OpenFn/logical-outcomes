alterState((state) => {
  function getPersonAttributes(obj) {
    return Object.entries(obj).map((item) => {
      if (item[0] === "enrollmentDate") item[0] = "Wj9itiV0fvP";
      return { attribute: item[0], value: item[1] };
    });
  }

  // "csvData": {
  //   "RxNsHWsucU6": "23-01-1995",
  //   "ZL4K1hwBdTF": "Bluffing",
  //   "aX5hD4qUpRW": "N5000841",
  //   "enrollmentDate": "2020-11-24",
  //   "lkk7ve7dr6b": "Knowingest",
  //   "nMsjzduOW4Z": "Female",
  //   "orgUnit": "EDNOfTDskvJ"
  // }

  const excludeAttributeList = ["orgUnit"];

  function cleanAttributes(attributes) {
    attributes.forEach((item, index) => {
      if (excludeAttributeList.includes(item.attribute)) {
        console.log(
          `${attributes[index].attribute} is not a valid attribute. Removed from state.body.attributes!`
        );
        attributes.splice(index, 1);
      }
    });
  }

  state.body = {
    trackedEntityType: state.data.trackedEntityType || "hRqJrTjGWtg", // DHIS2 id for Person EntityType
    orgUnit: state.data.csvData.orgUnit || state.data.orgUnit,

    attributes:
      state.data.attributes || getPersonAttributes(state.data.csvData),
    enrollments: [],
  };

  delete state.data;
  //   console.log("State", JSON.stringify(state.body));
  //   console.log(
  //     "trackedEntityType",
  //     JSON.stringify(state.body.trackedEntityType)
  //   );

  cleanAttributes(state.body.attributes);

  //   console.log("Cleaned state: ", JSON.stringify(state));

  return state;
});

alterState((state) => {
  console.log(`New State: ${JSON.stringify(state, null, 4)}`);
  return state;
});
// createTEI(state);
upsertTEI({
  trackedEntityType: "hRqJrTjGWtg",
  orgUnit: "EDNOfTDskvJ",
  attributes: [
    {
      attribute: "RxNsHWsucU6",
      value: "23-01-1995",
    },
    {
      attribute: "ZL4K1hwBdTF",
      value: "Bluffing",
    },
    {
      attribute: "aX5hD4qUpRW",
      value: "N5000841",
    },
    {
      attribute: "Wj9itiV0fvP",
      value: "2020-11-24",
    },
    {
      attribute: "lkk7ve7dr6b",
      value: "Knowingest",
    },
    {
      attribute: "nMsjzduOW4Z",
      value: "Female",
    },
  ],
  enrollments: [],
});

/*post("/api/trackedEntityInstances", {
  body: {
    trackedEntityType: "hRqJrTjGWtg",
    orgUnit: "EDNOfTDskvJ",
    attributes: [
      {
        attribute: "RxNsHWsucU6",
        value: "23-01-1995",
      },
      {
        attribute: "ZL4K1hwBdTF",
        value: "Bluffing",
      },
      {
        attribute: "aX5hD4qUpRW",
        value: "N5000841",
      },
      {
        attribute: "Wj9itiV0fvP",
        value: "2020-11-24",
      },
      {
        attribute: "lkk7ve7dr6b",
        value: "Knowingest",
      },
      {
        attribute: "nMsjzduOW4Z",
        value: "Female",
      },
    ],
    enrollments: [],
  },
  headers: { "Content-Type": "application/json" },
})(state);*/
