// This will be added to the next release of language-dhis2 as a standard
// helper function.
alterState(state => {
  state.boolean = (value) => {
    var val = (value.toString()!==undefined? value.toLowerCase() : null);
    var newVal = (val!==null && val.trim()==="yes"? true : false);
    return newVal;
  }
  state.attr = (id, value) => {
    return {
      attribute: id,
      value: value,
    };
  };

  state.dateConvert = (value) =>{
    var dateArr = (value ? value.split("\/") : null)
    var newDate = new Date(dateArr[2] + "-" + dateArr[0] + "-" + dateArr[1]);
    return newDate;
  }
  return state;
});

createTEI({
  trackedEntityType: 'MCPQUTHX1Ze', // Should this be hardcoded?
  orgUnit: dataValue('csvData.Org Unit UID')(state),
  attributes: state => [
    //state.attr('C1O4lnx0Ibz', state.data.csvData.PARTNER), //Partner category
    state.attr('bnQOk4Plo9Z', state.data.csvData.bnQOk4Plo9Z), //UTNWF Staff
    state.attr('TLjYqcKwhxP', state.data.csvData.TLjYqcKwhxP), //Beneficiary Name
    state.attr('ScSWoiqvdp5', state.data.csvData.ScSWoiqvdp5), //ID No
    state.attr('j38AUmNNy18', state.data.csvData.j38AUmNNy18), //Age
    state.attr('F2FjwHE7MTs', state.data.csvData.F2FjwHE7MTs), //Sex
    state.attr('g5QDO6GPgiJ', state.data.csvData.g5QDO6GPgiJ), //Telephone
    state.attr('zC1KsiGDVMk', state.data.csvData.zC1KsiGDVMk), //Village
    state.attr('cUqyRxPt1U7', state.boolean(state.data.csvData.cUqyRxPt1U7)), //Household head --> wrong attribute Id, CONVERT TO BOOLEAN
  ],
  enrollments: [
    {
      program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN?
      programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN?
      orgUnit: dataValue('csvData.Org Unit UID')(state),
      enrollmentDate: state => {
        var date = dataValue('csvData.START DATE (MM/YY)')(state) // 4/1/18
        state.dateConvert(date)
      },
      incidentDate: state => {
        var date = dataValue('csvData.START DATE (MM/YY)')(state) // 4/1/18
        state.dateConvert(date)
      },
      events: [
        { //Enrollment 1
          program: 'NGtZYxE0zFM', //FARM SPECIFIC ACTION PLAN
          programStage: 'wewcqVyGL5z', //FARM SPECIFIC ACTION PLAN
          orgUnit: dataValue('csvData.Org Unit UID')(state),
          eventDate: state => {
            var date = dataValue('csvData.START DATE (MM/YY)')(state) // 4/1/18
            state.dateConvert(date)
          },
          status: 'COMPLETED',
          storedBy: 'Test',
          orgUnitName: dataValue('csvData.Org unit')(state),
          attributeCategoryOptions: dataValue('csvData.Category option UID')(state),
          optionSize: 0,
          attributeOptionCombo: 'C1O4lnx0Ibz',
          coordinate: {
            latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
            longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
          },
          dataValues: [
          { //Col Q
            dataElement: 'vAh7VEB6L0f',
            value: state => {
              var value = dataValue('csvData.vAh7VEB6L0f')(state);
              var val = (value!==undefined? value.toLowerCase() : null);
              return (val==="yes"? true : false);
            }
          },
          { //Col R
            dataElement: 'IyW6h3oi1Gd',
            value: dataValue('IyW6h3oi1Gd')(state)
          }]
        },
          { //Enrollment 2
            program: 'NGtZYxE0zFM',
            programStage: 'XjDnSd7whRX', //TECHNOLOGY ADOPTION
            orgUnit: dataValue('csvData.Org Unit UID')(state),
            eventDate: state => {
              var date = dataValue('csvData.START DATE (MM/YY)')(state) // 4/1/18
              state.dateConvert(date)
            },
            status: 'COMPLETED',
            storedBy: 'Test',
            orgUnitName: dataValue('csvData.Org unit')(state),
            attributeCategoryOptions: dataValue('csvData.Category option UID')(state),
            optionSize: 0,
            attributeOptionCombo: 'C1O4lnx0Ibz',
            coordinate: {
              latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
              longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
            },
            dataValues: [
            { //Col S
              dataElement: 'LZ0FOPRvtdm',
              value: dataValue('LZ0FOPRvtdm')(state),
              }
            },
            { //Col T
              dataElement: 'kP5o7Ud1Vd4',
              value: dataValue('kP5o7Ud1Vd4')(state)
            },
            { //Col U
              dataElement: 'uFUTTqkEVtz',
              value: dataValue('uFUTTqkEVtz')(state)
            },
            { //Col V
              dataElement: 'JIb0HKi7MLq',
              value: dataValue('JIb0HKi7MLq')(state)
            },
            { //Col W
              dataElement: 'x7X1y7b4tAu',
              value: dataValue('x7X1y7b4tAu')(state)
            },
            { //Col X
              dataElement: 'VMyJ10uue3t',
              value: state => {
                var date = dataValue('VMyJ10uue3t')(state)
                state.dateConvert(date)
              }
            },
            { //Col Y
              dataElement: 'yH9GVEG6Pya',
              value: dataValue('yH9GVEG6Pya')(state)
            },
            { //Col Z
              dataElement: 'k7ZrxD00oTk',
              value: dataValue('k7ZrxD00oTk')(state)
            },
            { //Col AA
              dataElement: 'wvKDeTzKnOw',
              value: dataValue('wvKDeTzKnOw')(state)
            },
            { //Col AB
              dataElement: 'fohag7LHogI',
              value: dataValue('fohag7LHogI')(state)
            },
            { //Col AC
              dataElement: 'gkFvMlQR7mD',
              value: state => {
                var date = dataValue('gkFvMlQR7mD')(state)
                state.dateConvert(date)
              }
            },
            { //Col AD
              dataElement: 'GUjfts8o2I3',
              value: dataValue('GUjfts8o2I3')(state)
            },
            { //Col AE
              dataElement: 'oiiWce30HFA',
              value: dataValue('oiiWce30HFA')(state)
            },
            { //Col AF
              dataElement: 'RJDAG9P1o68',
              value: dataValue('RJDAG9P1o68')(state)
            },
            { //Col AG
              dataElement: 'Vl0MZ8bG3Mj',
              value: state => {
                var date = dataValue('Vl0MZ8bG3Mj')(state)
                state.dateConvert(date)
              }
            },
            { //Col AH
              dataElement: 'ZH28Ef03rWf',
              value: dataValue('ZH28Ef03rWf')(state)
            },
            { //Col AI
              dataElement: 'NgIYWTQIG1k',
              value: dataValue('NgIYWTQIG1k')(state)
            },
            { //Col AJ
              dataElement: 'bnpFpibSHTZ',
              value: dataValue('bnpFpibSHTZ')(state)
            },
            { //Col AK
              dataElement: 'JE8QDXFNPQ3',
              value: dataValue('JE8QDXFNPQ3')(state)
            },
            { //Col AL
              dataElement: 'IXBQ9iyOsj7',
              value: state => {
                var date = dataValue('IXBQ9iyOsj7')(state)
                state.dateConvert(date)
              }
            },
            { //Col AM
              dataElement: 'CdGdpMnhq9N',
              value: dataValue('CdGdpMnhq9N')(state)
            },
            { //Col AN
              dataElement: 'CDK1lWPutjS',
              value: dataValue('CDK1lWPutjS')(state)
            },
            { //Col AO
              dataElement: 'yoS2hi15LNw',
              value: dataValue('yoS2hi15LNw')(state)
            },
            { //Col AP
              dataElement: 'wIora0v6L1w',
              value: state => {
                var date = dataValue('wIora0v6L1w')(state)
                state.dateConvert(date)
              }
            },
            { //Col AQ
              dataElement: 'lSgPvELDL1f',
              value: dataValue('lSgPvELDL1f')(state)
            },
            { //Col AR
              dataElement: 't65Q6g7ZyDH',
              value: dataValue('t65Q6g7ZyDH')(state)
            },
            { //Col AS
              dataElement: 'dtgxdpuv1gi',
              value: state => {
                var date = dataValue('dtgxdpuv1gi')(state)
                state.dateConvert(date)
              }
            },
            { //Col AT
              dataElement: 'YZXBjzU3qq6',
              value: dataValue('YZXBjzU3qq6')(state)
            },
            { //Col AU
              dataElement: 'y7ffvo37Unv',
              value: dataValue('y7ffvo37Unv')(state)
            },
            { //Col AV
              dataElement: 'LmWgNlOgEmJ',
              value: state => {
                var date = dataValue('LmWgNlOgEmJ')(state)
                state.dateConvert(date)
              }
            },
            { //Col AW
              dataElement: 'iADbtBlMxTs',
              value: dataValue('iADbtBlMxTs')(state)
            },
            { //Col AX
              dataElement: 'sYUhjK3UdP1',
              value: dataValue('sYUhjK3UdP1')(state)
            },
            { //Col AY
              dataElement: 'l4pKaxmLOrW',
              value: state => {
                var date = dataValue('l4pKaxmLOrW')(state)
                state.dateConvert(date)
              }
            },
            { //Col AZ
              dataElement: 'otlK2nqPJd1',
              value: dataValue('otlK2nqPJd1')(state)
            },
            { //Col BA
              dataElement: 'frjA2JXh9cY',
              value: dataValue('frjA2JXh9cY')(state)
            },
            { //Col BB
              dataElement: 'Eh89gu65Xnd',
              value: state => {
                var date = dataValue('Eh89gu65Xnd')(state)
                state.dateConvert(date)
              }
            },
            { //Col BC
              dataElement: 'I3mYNeMDixy',
              value: dataValue('I3mYNeMDixy')(state)
            },
            { //Col BD
              dataElement: 'fK3Pqv7IWo7',
              value: dataValue('fK3Pqv7IWo7')(state)
            },
            { //Col BE
              dataElement: 'PrPEHhALnzl',
              value: state => {
                var date = dataValue('PrPEHhALnzl')(state)
                state.dateConvert(date)
              }
            },
            { //Col BF
              dataElement: 'Nh894w42Ti4',
              value: dataValue('Nh894w42Ti4')(state)
            },
            { //Col BG
              dataElement: 'mZrNVMSr9QN',
              value: dataValue('mZrNVMSr9QN')(state)
            },
            { //Col BH
              dataElement: 'TVsbvQkpi17',
              value: dataValue('TVsbvQkpi17')(state)
            },
            { //Col BI
              dataElement: 'ldl5hinz5TC',
              value: dataValue('ldl5hinz5TC')(state)
            },
            { //Col BJ
              dataElement: 'mwNDjqVe6C2',
              value: dataValue('mwNDjqVe6C2')(state)
            },
            { //Col BK
              dataElement: 'ylfCWUBbiZk',
              value: state => {
                var date = dataValue('ylfCWUBbiZk')(state)
                state.dateConvert(date)
              }
            },
            { //Col BL
              dataElement: 'jpS0aEcFGy8',
              value: dataValue('jpS0aEcFGy8')(state)
            },
            { //Col BM
              dataElement: 'LzIigcjxapS',
              value: dataValue('LzIigcjxapS')(state)
            },
            { //Col BN
              dataElement: 'VOgnzzSuYZX',
              value: state => {
                var date = dataValue('VOgnzzSuYZX')(state)
                state.dateConvert(date)
              }
            },
            { //Col BO
              dataElement: 'YdBzuMj0CSh',
              value: dataValue('YdBzuMj0CSh')(state)
            },
            { //Col BP
              dataElement: 'XmM7gBcfg6P',
              value: dataValue('XmM7gBcfg6P')(state)
            },
            { //Col BQ
              dataElement: 'HN09RtK91MC',
              value: state => {
                var date = dataValue('HN09RtK91MC')(state)
                state.dateConvert(date)
              }
            }

        ],
        }]
    },
  ]
});
