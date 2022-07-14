alterState((state) => {
  console.log(
    'Updating dates in DHIS2 for',
    state.data.csvData ? state.data.csvData.length : 0,
    'events...'
  );
  return state;
});

each(
  dataPath('csvData[*]'),
  upsertTEI(
      'SgQW3vpnhuL', //piirs uid
      {
        trackedEntityType: 'bsDL4dvl2ni',
        orgUnit: dataValue('OrgUnit'),
        attributes: [
          {
            attribute: 'SgQW3vpnhuL',
            value: dataValue('SgQW3vpnhuL')
          },
          {
            attribute: 'aC1WkFsKqv3',
            value: dataValue('aC1WkFsKqv3'),
          },
        ],
      },
      { strict: false }
    )
);
