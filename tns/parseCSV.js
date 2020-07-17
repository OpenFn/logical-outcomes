parseCSV(
  // '/home/taylor/Dropbox (OpenFn)/Projects/Logical Outcomes/LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  // NOTE: I'm using double `\` to build this path when I run this on Windows.
  // It's working at the time of this commit, on Windows 10 Pro, x64, Node v12.0.0 (via NVM 1.1.7).
  'C:\\Users\\downs\\Dropbox (OpenFn)\\Projects\\Logical Outcomes\\LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv'
  {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
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
