each(
  dataPath('csvData'),
  upsertTEI({
    trackedEntityType: 'hRqJrTjGWtg', // DHIS2 id for Person EntityType
    orgUnit: dataValue('orgUnit'),
    attributes: state => {
      const attrs = { ...state.data }
      delete attrs.orgUnit;
      return attrs;
    },
    // enrollments: [] // seems as though we do not want to create enrollments
  })
);