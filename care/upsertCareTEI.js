upsertTEI(
  'w75KJ2mc4zz', // match on 'patientID', a custom external ID in dhis2
  {
    trackedEntityType: 'nEenWmSyUEp',
    orgUnit: 'g8upMTyEZGZ',
    attributes: [
      {
        attribute: 'w75KJ2mc4zz',
        value: dataValue('form.first_name')(state),
      },
      {
        attribute: 'zDhUuAYrxNC',
        value: dataValue('form.last_name')(state),
      },
    ],
  }
);
