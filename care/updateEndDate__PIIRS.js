alterState(state => {
  const { csvData } = state.data;
  
  return each(csvData, state => {
    const { data } = state;
    const ou = data.OrgUnit; 
    const uid = data.SgQW3vpnhuL;
    const enddate = data.nNbMsTUf3M6; 
    
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
            attribute: 'nNbMsTUf3M6',
            value: enddate,
          },
        ],
      },
      { strict: false }
    )(state);
  })(state);
});
