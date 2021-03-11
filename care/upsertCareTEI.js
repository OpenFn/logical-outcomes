//TO UPDATE: https://piirs.care.org/dhis-web-tracker-capture/index.html#/dashboard?tei=J7t4VZTgb1N&program=SHRBw9XXHFk&ou=gixv5Y8nbzp
beta.each("$.csvData[*]",
  upsertTEI(
    'SgQW3vpnhuL', //piirs uid
    {
      trackedEntityType: 'bsDL4dvl2ni',
      orgUnit: dataValue('OrgUnit'),
      attributes: [
        {
          attribute: 'SgQW3vpnhuL',
          value: dataValue('SgQW3vpnhuL'),
        },
        {
          attribute: 'MxQPuS9G7hh',
          value: dataValue('MxQPuS9G7hh'),
        },
      ],
    },
    { strict: false }
));

/*each(
  dataPath("csvData[*]"),
  upsertTEI(
    'SgQW3vpnhuL', //piirs uid
    {
      trackedEntityType: 'bsDL4dvl2ni',
      orgUnit: dataValue('OrgUnit'),
      attributes: [
        {
          attribute: 'SgQW3vpnhuL',
          value: dataValue('SgQW3vpnhuL'),
        },
        {
          attribute: 'MxQPuS9G7hh',
          value: dataValue('MxQPuS9G7hh'),
        },
      ],
    },
    { strict: false }
  ));*/

