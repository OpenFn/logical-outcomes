get(
  '/trackedEntityInstances/query.json', {
    query: {
      ou: 'e5CYXI5Ncay',
      ouMode: 'ACCESSIBLE',
      program: 'NGtZYxE0zFM',
      filter: `TLjYqcKwhxP:LIKE:${state.data.csvData.TLjYqcKwhxP}`,
      pageSize: 50,
      page: 1,
      totalPages: true
    }
  },
  state => {
    var row1 = state.data.rows[0]
    var tei = (row1 ? "/"+row1[0]+"?strategy=CREATE_AND_UPDATE" : "")
    state.data = {
      //id: state.data.rows[0][0]
      id: tei
    };
    console.log(`did thing 1: ${state.data.id}`)
    return state;
  }
);

alterState(state => {
  // state.data.id has been set to the TEI's id, and we get that below.
  console.log(`doing thing 1.5: ${state.data.id}`)
  return state;
});

request({
  url: state => `${state.configuration.baseUrl}/trackedEntityInstances${state.data.id}`,
  body: "[FILL IN BODY HERE]", //TO UPDATE AND DYNAMICALLY FILL FROM CSV
  method: state => (state.data.id ? "PUT" : "POST")
})
