each(
  dataPath('csvData[*]'),
  upsertTEI({
    trackedEntityType: 'hRqJrTjGWtg', // DHIS2 id for Person EntityType
    orgUnit: dataValue('orgUnit'),
    attributes: state => {
      const attrs = { ...state.data, 'Wj9itiV0fvP': state.data.enrollmentDate };
      delete attrs.orgUnit;
      delete attrs.enrollmentDate;
      
      const attributePairs = Object.entries(attrs).map(pair => ({
        attribute: pair[0], value: pair[1]
      }));
      
      return attributePairs;
    },
    // enrollments: [] // seems as though we do not want to create enrollments
  })
);