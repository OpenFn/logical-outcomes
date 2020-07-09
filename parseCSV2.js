parseCSV(
  // '/home/taylor/Dropbox (OpenFn)/Projects/Logical Outcomes/LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  // NOTE: I'm using double `\` to build this path when I run this on Windows.
  // It's working at the time of this commit, on Windows 10 Pro, x64, Node v12.0.0 (via NVM 1.1.7).
  //'C:\\Users\\downs\\Dropbox (OpenFn)\\Projects\\Logical Outcomes\\LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  "/Users/aleksakrolls/Downloads/REACH_dataUpload01.csv",
  {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  }
);
each(
  "$.data[*]",
  post("https://www.openfn.org/inbox/f1ca2bc7-382b-46f8-bded-bcb977b0cbd7", {
    body: (state) => ({ csvData: state.data, upload: 'REACH_upload_01', test: 'true'}),
  })
);
