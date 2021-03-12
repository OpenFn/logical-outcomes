//TO UPDATE: https://dev.piirs.care.org/dhis-web-tracker-capture/index.html#/dashboard?tei=J7t4VZTgb1N&program=SHRBw9XXHFk&ou=gixv5Y8nbzp
alterState(state => {
  const { csvData } = state.data;
  
  return each(csvData, state => {
    const { data } = state;
    const ou = data.OrgUnit; 
    const uid = data.SgQW3vpnhuL;
    const geo = data.MxQPuS9G7hh; 
    
    return upsertTEI(
      'SgQW3vpnhuL', //piirs uid
      {
        trackedEntityType: 'bsDL4dvl2ni',
        orgUnit: ou,
        attributes: [
          {
            attribute: 'SgQW3vpnhuL',
            value: uid
          },
          {
            attribute: 'MxQPuS9G7hh',
            value: geo,
          },
        ],
      },
      { strict: false }
    )(state);
  })(state);
}); 

//TODO: CHaiwa to investigate why each(...) returns undefined
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

