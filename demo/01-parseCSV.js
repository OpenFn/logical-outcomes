//NOTE: Update L16 to match Job 02 Trigger
alterState(state => {
  console.log('Received bulk CSV, parsing for upload.');
  function chunk(arr, chunkSize) {
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
    return R;
  }

  const csvData = chunk(state.data.csvData, 1);

  const postCsv = async csv => {
    return post(state.configuration.inboxUrl, {
      body: { csvData: csv, upload: 'fakeDemographics' },
    })(state);
  };

  async function makePosts() {
    return Promise.all([
      ...csvData.map(item => postCsv(item)),
    ]);
  }
  return makePosts();
});