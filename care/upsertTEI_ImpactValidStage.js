//TO UPDATE: https://dev.piirs.care.org/dhis-web-tracker-capture/index.html#/dashboard?tei=J7t4VZTgb1N&program=SHRBw9XXHFk&ou=gixv5Y8nbzp
fn(state => {
  const { data } = state; 
  const { csvData } = state.data;
  const ou = data.OrgUnit; 
  const uid = data.SgQW3vpnhuL;
  const geo = data.MxQPuS9G7hh; 
  
  return state; 
});

update('trackedEntityInstances', dataValue('trackedEntityInstance'), {
  orgUnit: dataValue('orgUnit'),
  trackedEntityInstance: dataValue('trackedEntityInstance'),
  trackedEntityType: 'bsDL4dvl2ni', //default
  //featureType: 'NONE',
  enrollments: [],
  relationships: [],
  // attributes: [
  //   {
  //     lastUpdated: '2016-01-12T00:00:00.000',
  //     displayName: 'Last name',
  //     created: '2016-01-12T00:00:00.000',
  //     valueType: 'TEXT',
  //     attribute: 'zDhUuAYrxNC',
  //     value: 'Russell',
  //   },
  //   {
  //     lastUpdated: '2016-01-12T00:00:00.000',
  //     code: 'MMD_PER_NAM',
  //     displayName: 'First name',
  //     created: '2016-01-12T00:00:00.000',
  //     valueType: 'TEXT',
  //     attribute: 'w75KJ2mc4zz',
  //     value: 'Catherine',
  //   },
  // ],
});
  
  
  
  
//   return each(csvData, state => {
//     const { data } = state;
    
    
//     return upsertTEI(
//       'SgQW3vpnhuL', //piirs uid
//       {
//         trackedEntityType: 'bsDL4dvl2ni',
//         orgUnit: ou,
//         attributes: [
//           {
//             attribute: 'SgQW3vpnhuL',
//             value: uid
//           },
//           {
//             attribute: 'MxQPuS9G7hh',
//             value: geo,
//           },
//         ],
//       },
//       { strict: false }
//     )(state);
//   })(state);
// }); 