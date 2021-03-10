//TO UPDATE: https://dev.piirs.care.org/dhis-web-tracker-capture/index.html#/dashboard?tei=J7t4VZTgb1N&program=SHRBw9XXHFk&ou=gixv5Y8nbzp
each("$.csvData[*]",
  upsertTEI(
  'SgQW3vpnhuL', //piirs uid
  {
    trackedEntityType: 'bsDL4dvl2ni',
    orgUnit: dataValue('OrgUnit'),
    attributes: [
      {
        attribute: 'aX5hD4qUpRW',
        value: dataValue('aX5hD4qUpRW'),
      },
      {
        attribute: 'MxQPuS9G7hh',
        value: dataValue('MxQPuS9G7hh'),
      },
    ],
  },
  { strict: false }
));
