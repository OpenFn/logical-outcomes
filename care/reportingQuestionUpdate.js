alterState((state) => {
  console.log(
    'Updating TEIs DHIS2 for',
    state.data.csvData ? state.data.csvData.length : 0,
    'reporting questions...'
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
            attribute: 'D62Fk29UP9r', //reporting question
            value: dataValue('D62Fk29UP9r'),
          },
        ],
      },
      { strict: false }
    )
);
