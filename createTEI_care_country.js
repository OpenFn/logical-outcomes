//Job to upload CSVs to DHIS2 'Country Form' program
alterState((state) => {
  const officeMap = {
    'Registered Office (Member/Candidate/Affiliate)':
      'Member Candidate or Affiliate',
    'Registered Office (Country Office)': 'Country Office',
    'Registered Office (Regional/Sub-regional)': 'Regional Management Unit',
    'Registered Office (Fundraising/Advocacy)': 'Fundraising and or Advocacy',
    'Non-Registered Office (Engagement)': 'Engagement',
  };

  state.office =
    officeMap[`${state.data.csvData.yvJlth2qQAG}`] ||
    `${state.data.csvData.yvJlth2qQAG}`;

  return state;
});
createTEI({
  trackedEntityType: 'bsDL4dvl2ni',
  orgUnit: dataValue('csvData.orgUnit')(state), //Col B
  attributes: [
    {
      attribute: 'INS05jiIWB0', //Col A
      value: dataValue('csvData.Enrollment date')(state), //INS05jiIWB0
    },
    {
      attribute: 'KoMyxpIXeHp', //Col C
      value: dataValue('csvData.KoMyxpIXeHp')(state),
    },
    {
      attribute: 'yvJlth2qQAG', //Col D
      //Map this value to Office Type --> see above officeMap
      value: dataValue('csvData.yvJlth2qQAG')(state),
    },
    {
      attribute: 'SiSTAiVHVIn', //Col E
      value: dataValue('csvData.SiSTAiVHVIn')(state),
    },
    {
      attribute: 'cULiF86pO1R', //Col F
      value: dataValue('csvData.cULiF86pO1R')(state), //Q: Need to clean phone?
    },
    {
      attribute: 'aZFgv0BnZ1c', //Col G
      value: dataValue('csvData.aZFgv0BnZ1c')(state),
    },
  ],
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
