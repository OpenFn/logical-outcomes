alterState((state) => {
  function getPersonAttributes(obj) {
    return Object.entries(obj).map((item) => {
      if (item[0] === "enrollmentDate") item[0] = "Wj9itiV0fvP";
      return { attribute: item[0], value: item[1] };
    });
  }

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

  cleanAttributes(state.body.attributes);

  return state;
});

alterState((state) => {
  return upsertTEI(state.body)(state);
});
