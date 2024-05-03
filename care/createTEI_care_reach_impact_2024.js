each(
  '$.data.rows[*]',
  post(`${state.configuration.inboxUrl}`, {
    body: {
      rows: state => state.data,
      fileName: 'Profiles Historical Data_Work_TEST Instance',
      date: '2024-03-31',
      batched: true,
      batch_size: 1,
      test: true,
    },
    headers: { 'content-type': 'application/json' },
  })
);