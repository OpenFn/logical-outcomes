alterState(state => {
  const getPersonAttributes = data => {
    return Object.entries(data).map(item => {
      if (item[0] === 'enrollmentDate') item[0] = 'Wj9itiV0fvP';
      return { attribute: item[0], value: item[1] };
    });
  };

  state.data.attributes = getPersonAttributes(state.data.csvData);

  return state;
});

alterState(state => {
  const excludeAttributeList = ['orgUnit'];

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

  delete state.data;
  cleanAttributes(state.body.attributes);

  return state;
});

upsertTEI({
  trackedEntityType: 'hRqJrTjGWtg', // DHIS2 id for Person EntityType
  orgUnit: dataValue('orgUnit'),
  attributes: dataValue('attributes'),
  enrollments: dataValue('enrollments'),
});
// alterState((state) => {
//   return createTEI(state.body)(state);
// });
