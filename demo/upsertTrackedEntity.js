alterState(state => {
  state.data = state.data.csvData[0] ? state.data.csvData[0] : state.data.csvData;
  console.log(state.data);
  return state;
});

get(
  'https://training.logicaloutcomes.net/api/trackedEntityInstances',
  {
    query: state => ({
      ou: state.data.orgUnit,
      ouMode: 'ACCESSIBLE',
      filter: `aX5hD4qUpRW:LIKE:${state.data.aX5hD4qUpRW}`, //query existing TEIs using the Unique Id
      pageSize: 50,
      page: 1,
      totalPages: true,
    }),
  },
  state => {
    const row1 = state.data.trackedEntityInstances[0];
    console.log(`Row returned by GET: ${JSON.stringify(row1, null, 2)}`);
    state.tei = row1
      ? '/' + row1.trackedEntityInstance + '?strategy=CREATE_AND_UPDATE'
      : '';
    console.log(`Searched for existing TEI: ${state.tei}`);
    return state;
  }
);
alterState(state => {
  // Note: we don't care about anything in the response except the TEI id, so we
  // restore state.data to the initial csvData here.
  state.data = state.references[0];
  state.attr = (id, value) => {
    // return attribute set with value
    return {
      attribute: id,
      value: value,
    };
  };

  state.body = {
    trackedEntityType: 'hRqJrTjGWtg',
    orgUnit: state.data.orgUnit,
    attributes: [
      state.attr('aX5hD4qUpRW', state.data.aX5hD4qUpRW), //Unique Id
      state.attr('ZL4K1hwBdTF', state.data.ZL4K1hwBdTF),
      state.attr('lkk7ve7dr6b', state.data.lkk7ve7dr6b),
      state.attr('nMsjzduOW4Z', state.data.nMsjzduOW4Z),
      state.attr('RxNsHWsucU6', state.data.RxNsHWsucU6),
      state.attr('mST2gzuBX5n', state.data.mST2gzuBX5n),
      state.attr('bvhl1vjLL7a', state.data.bvhl1vjLL7a),
      state.attr('qAS7Umj366I', state.data.qAS7Umj366I),
    ],
    enrollments: [
      {
        program: 'wZLN40noez1',
        orgUnit: state.data.orgUnit,
        enrollmentDate: state.data.enrollmentDate,
        incidentDate: state.data.enrollmentDate,
      },
    ],
  };
  return state;
});
request({
  auth: {
    user: state.configuration.username,
    pass: state.configuration.password,
  },
  method: state => (state.tei ? 'PUT' : 'POST'),
  url: state =>
    `https://training.logicaloutcomes.net/api/trackedEntityInstances${state.tei}`,
  json: state => state.body,
});

alterState(state => {
  console.log(`Server response: ${JSON.stringify(state.body, null, 2)}`);
  return state;
});
