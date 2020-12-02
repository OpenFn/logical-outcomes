parseCSV(
  // '/home/taylor/Dropbox (OpenFn)/Projects/Logical Outcomes/LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  // NOTE: I'm using double `\` to build this path when I run this on Windows.
  //'C:\\Users\\downs\\Dropbox (OpenFn)\\Projects\\Logical Outcomes\\LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  "/Users/aleksakrolls/Downloads/FakeDemographics.csv",
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
    body: (state) => ({ data: state.data, upload: 'fakeDemographics', date: '02-12-2020' }), 
  })
);
