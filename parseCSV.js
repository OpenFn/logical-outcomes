parseCSV(
  '/home/taylor/Dropbox (OpenFn)/Projects/Logical Outcomes/LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  {
    columns: true,
    skip_empty_lines: true,
  }
);

each(
  dataPath('records[*]'),
  post('https://www.openfn.org/inbox/8ad63a29-5c25-4d8d-ba2c-fe6274dcfbab', {
    body: state => {
      return { csvData: state.data };
    },
  })
);
