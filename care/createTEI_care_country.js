//Job to upload CSVs to DHIS2 'Country Form' program
alterState((state) => {
  const { csvData } = state.data;
  const officeMap = {
    'Registered Office (Member/Candidate/Affiliate)':
      'Member Candidate or Affiliate',
    'Registered Office (Country Office)': 'Country Office',
    'Registered Office (Regional/Sub-regional)': 'Regional Management Unit',
    'Registered Office (Fundraising/Advocacy)': 'Fundraising and or Advocacy',
    'Non-Registered Office (Engagement)': 'Engagement',
  };

  state.office = officeMap[csvData.yvJlth2qQAG] || csvData.yvJlth2qQAG;

  return state;
});

createTEI({
  trackedEntityType: 'QsALEOPwPrX',//'bsDL4dvl2ni',
  orgUnit: dataValue('csvData.orgUnit')(state), //Col B
  attributes: (state) => {
    const { csvData } = state.data;
    return [
      {
        attribute: 'INS05jiIWB0', //Col A
        value: csvData['Enrollment date'], //INS05jiIWB0
      },
      {
        attribute: 'KoMyxpIXeHp', //Col C
        value: csvData.KoMyxpIXeHp,
      },
      {
        attribute: 'yvJlth2qQAG', //Col D
        value: state.office,
      },
      {
        attribute: 'SiSTAiVHVIn', //Col E
        value: csvData.SiSTAiVHVIn,
      },
      {
        attribute: 'cULiF86pO1R', //Col F
        value: csvData.cULiF86pO1R, //Q: Need to clean phone?
      },
      {
        attribute: 'aZFgv0BnZ1c', //Col G
        value: csvData.aZFgv0BnZ1c,
      },
    ];
  },
  enrollments: [
    {
      orgUnit: dataValue('csvData.orgUnit')(state),
      program: 'Abrv0aKRSKG', //Country Form
      programStage: 'cjORWZO5fdq', //Staff stage
      enrollmentDate: dataValue('csvData.Enrollment date')(state),
      incidentDate: dataValue('csvData.Enrollment date')(state),
    },
  ],
});
