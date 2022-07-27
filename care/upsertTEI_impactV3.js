// fn(state => {
//   state.data = state.data.csvData[0]
//     ? state.data.csvData[0]
//     : state.data.csvData;
//   console.log(state.data);
//   return state;
// });

get(
  'https://testing.piirs.care.org/api/trackedEntityInstances',
  {
    query: state => ({
      ou: state.data.orgUnit,
      ouMode: 'ACCESSIBLE',
      filter: `SgQW3vpnhuL:LIKE:${state.data.SgQW3vpnhuL}`, //query existing TEIs using the Unique Id
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
fm(state => {
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
    trackedEntityType: 'bsDL4dvl2ni',
    orgUnit: state.data.orgUnit,
    attributes: [
      state.attr('SgQW3vpnhuL', state.data.SgQW3vpnhuL), //Unique Id
    ],
    events: [
      {
        program: dataValue('program'),
        //event: 'EZYHKe59NmY',
        programStage: dataValue('programStage'),
        orgUnit: dataValue('orgUnit'),
        trackedEntityInstance: dataValue('trackedEntityInstance'),
        enrollment: dataValue('enrollment'),
        // enrollmentStatus: 'ACTIVE',
        // status: 'COMPLETED',
        //eventDate: '2021-06-30T00:00:00.000',
        eventDate: dataValue('eventDate'),
        //'attributeCategoryOptions': 'xYerKDKCefk',
        //'attributeOptionCombo': 'HllvX50cXC0',
        //'completedDate': '2021-10-06T00:00:00.000',
        //'completedBy': 'alokp@careindia.org',
        dataValues: [
          // {
          //     'lastUpdated': '2021-10-05T19:06:25.441',
          //     'storedBy': 'alokp@careindia.org',
          //     'created': '2021-09-12T07:23:42.601',
          //     'dataElement': 'HBKuzYeB1Ub',
          //     'value': '16',
          //     'providedElsewhere': false
          // },
          { dataElement: 'j2jVjSzbBSl', value: dataValue('j2jVjSzbBSl') },
          { dataElement: 'rcYhVWjKYOD', value: dataValue('rcYhVWjKYOD') },
          { dataElement: 'Xq8IJfzYYhS', value: dataValue('Xq8IJfzYYhS') },
          { dataElement: 'Xyb7MluqDXJ', value: dataValue('Xyb7MluqDXJ') },
          { dataElement: 'qTDFqTP8e0N', value: dataValue('qTDFqTP8e0N') },
          { dataElement: 'PRgM6afWahU', value: dataValue('PRgM6afWahU') },
          { dataElement: 'YM06DHJEO0a', value: dataValue('YM06DHJEO0a') },
          { dataElement: 'JQfbRTGVidD', value: dataValue('JQfbRTGVidD') },
          { dataElement: 'TlHbxhC5JfB', value: dataValue('TlHbxhC5JfB') },
          { dataElement: 'yW6TrE0jFi9', value: dataValue('yW6TrE0jFi9') },
          { dataElement: 'dyQyFP0JoY2', value: dataValue('dyQyFP0JoY2') },
          { dataElement: 'qW6AFETFUJE', value: dataValue('qW6AFETFUJE') },
          { dataElement: 'I5MSJrFcsxW', value: dataValue('I5MSJrFcsxW') },
          { dataElement: 'Fw7afYXVxFJ', value: dataValue('Fw7afYXVxFJ') },
          { dataElement: 'FVr0DFR5kCu', value: dataValue('FVr0DFR5kCu') },
          { dataElement: 'iZDxVnFcTFI', value: dataValue('iZDxVnFcTFI') },
          { dataElement: 'BKdoGlB4SOB', value: dataValue('BKdoGlB4SOB') },
          { dataElement: 'VLcaTEPGfT0', value: dataValue('VLcaTEPGfT0') },
          { dataElement: 'b2Py4ojJBR1', value: dataValue('b2Py4ojJBR1') },
          { dataElement: 'HNFNanis0Ks', value: dataValue('HNFNanis0Ks') },
          { dataElement: 'wGerPbIW4kk', value: dataValue('wGerPbIW4kk') },
          { dataElement: 'YHwV7ihDVpK', value: dataValue('YHwV7ihDVpK') },
          { dataElement: 'hU2OFLeKSgN', value: dataValue('hU2OFLeKSgN') },
          { dataElement: 'Q4UUFB1yfmp', value: dataValue('Q4UUFB1yfmp') },
          { dataElement: 'USGkAMjWIQu', value: dataValue('USGkAMjWIQu') },
          { dataElement: 'BkLLGIDLDHY', value: dataValue('BkLLGIDLDHY') },
          { dataElement: 'k1hQG03dc65', value: dataValue('k1hQG03dc65') },
          { dataElement: 'jFaNTptbVGK', value: dataValue('jFaNTptbVGK') },
          { dataElement: 'nrz73zqkOGT', value: dataValue('nrz73zqkOGT') },
          { dataElement: 'Ill0HFWS97A', value: dataValue('Ill0HFWS97A') },
          { dataElement: 'qc0XmeYYYG1', value: dataValue('qc0XmeYYYG1') },
          { dataElement: 'MkMvoZFlovk', value: dataValue('MkMvoZFlovk') },
          { dataElement: 'UeDs5pHE0Gm', value: dataValue('UeDs5pHE0Gm') },
          { dataElement: 'u10ZT6raeCg', value: dataValue('u10ZT6raeCg') },
          { dataElement: 'uwTZmNJ2rWr', value: dataValue('uwTZmNJ2rWr') },
          { dataElement: 'WL7drXWQWSt', value: dataValue('WL7drXWQWSt') },
          { dataElement: 'BjQkMpNq7zU', value: dataValue('BjQkMpNq7zU') },
          { dataElement: 'ZlXy62Mv7zk', value: dataValue('ZlXy62Mv7zk') },
          { dataElement: 'jZBUQhVkjl9', value: dataValue('jZBUQhVkjl9') },
          { dataElement: 'eYcfLEPSzKj', value: dataValue('eYcfLEPSzKj') },
          { dataElement: 'Ji68ajPqNfo', value: dataValue('Ji68ajPqNfo') },
          { dataElement: 'XimouRqX6Pq', value: dataValue('XimouRqX6Pq') },
          { dataElement: 'eOILH0lOgtF', value: dataValue('eOILH0lOgtF') },
          { dataElement: 'UyzB6KQlODO', value: dataValue('UyzB6KQlODO') },
          { dataElement: 'bZyjhGG7qq1', value: dataValue('bZyjhGG7qq1') },
          { dataElement: 'bB5gbi2XR2o', value: dataValue('bB5gbi2XR2o') },
          { dataElement: 'DTUhQiiUQrj', value: dataValue('DTUhQiiUQrj') },
          { dataElement: 'KVXjOQvsprZ', value: dataValue('KVXjOQvsprZ') },
          { dataElement: 'DvmOnMN6A8O', value: dataValue('DvmOnMN6A8O') },
          { dataElement: 'LbZje7Rlwh9', value: dataValue('LbZje7Rlwh9') },
          { dataElement: 'DnIWT9KKADj', value: dataValue('DnIWT9KKADj') },
          { dataElement: 'Rp0u3a0jdxd', value: dataValue('Rp0u3a0jdxd') },
          { dataElement: 'vFDItUNKWfm', value: dataValue('vFDItUNKWfm') },
          { dataElement: 'onMVDerKaWF', value: dataValue('onMVDerKaWF') },
          { dataElement: 'KRFtvY6Nlnz', value: dataValue('KRFtvY6Nlnz') },
          { dataElement: 'yGkM2FkQ5MO', value: dataValue('yGkM2FkQ5MO') },
          { dataElement: 'D8R4lfgXOe2', value: dataValue('D8R4lfgXOe2') },
          { dataElement: 'dJIRPfLRmQ7', value: dataValue('dJIRPfLRmQ7') },
          { dataElement: 'WFXqLC2pN9M', value: dataValue('WFXqLC2pN9M') },
          { dataElement: 'eqg9Kc7wjJt', value: dataValue('eqg9Kc7wjJt') },
          { dataElement: 'ukea7GyxpMx', value: dataValue('ukea7GyxpMx') },
          { dataElement: 'o4nWwW6tsvE', value: dataValue('o4nWwW6tsvE') },
          { dataElement: 'aWEbwoHW7JD', value: dataValue('aWEbwoHW7JD') },
          { dataElement: 'jjpcOKHh6JD', value: dataValue('jjpcOKHh6JD') },
          { dataElement: 'za6HD8Vqm9D', value: dataValue('za6HD8Vqm9D') },
          { dataElement: 'wcdPnip48LY', value: dataValue('wcdPnip48LY') },
          { dataElement: 'YP71tdG5zcX', value: dataValue('YP71tdG5zcX') },
          { dataElement: 'n1QurtQ7nVM', value: dataValue('n1QurtQ7nVM') },
          { dataElement: 'hQtbBWVDwU6', value: dataValue('hQtbBWVDwU6') },
          { dataElement: 'zl7Bd2mXTQq', value: dataValue('zl7Bd2mXTQq') },
          { dataElement: 'Q37sRpGJau3', value: dataValue('Q37sRpGJau3') },
          { dataElement: 'I8M7BE7xLkC', value: dataValue('I8M7BE7xLkC') },
          { dataElement: 'DrDqT6EVULo', value: dataValue('DrDqT6EVULo') },
          { dataElement: 'FcVjJIwE27V', value: dataValue('FcVjJIwE27V') },
          { dataElement: 'ClVwgOWsq8x', value: dataValue('ClVwgOWsq8x') },
          { dataElement: 'BzrerNYtvQm', value: dataValue('BzrerNYtvQm') },
          { dataElement: 'aNiNMqjkXbM', value: dataValue('aNiNMqjkXbM') },
          { dataElement: 'wKItc9secr2', value: dataValue('wKItc9secr2') },
          { dataElement: 'HV4ye3f55mm', value: dataValue('HV4ye3f55mm') },
          { dataElement: 'I9zXa6keqYy', value: dataValue('I9zXa6keqYy') },
          { dataElement: 'i79aEz5ePH4', value: dataValue('i79aEz5ePH4') },
          { dataElement: 'pFOVT0RwtLF', value: dataValue('pFOVT0RwtLF') },
          { dataElement: 'xiyEfY9Jx6u', value: dataValue('xiyEfY9Jx6u') },
          { dataElement: 'B3DG3me3Vxk', value: dataValue('B3DG3me3Vxk') },
          { dataElement: 'ipHlKAVEMfz', value: dataValue('ipHlKAVEMfz') },
          { dataElement: 'YxYWzVj4tU7', value: dataValue('YxYWzVj4tU7') },
          { dataElement: 'KwUfjBTL5EO', value: dataValue('KwUfjBTL5EO') },
          { dataElement: 'QPlXbsXp8Ge', value: dataValue('QPlXbsXp8Ge') },
          { dataElement: 'KcLYyu7PHNe', value: dataValue('KcLYyu7PHNe') },
          { dataElement: 'QbrU6ReY3Zq', value: dataValue('QbrU6ReY3Zq') },
          { dataElement: 'mTOv1cnmvpx', value: dataValue('mTOv1cnmvpx') },
          { dataElement: 'KPTx7FEtXgM', value: dataValue('KPTx7FEtXgM') },
          { dataElement: 'qAmfhqLFsbV', value: dataValue('qAmfhqLFsbV') },
          { dataElement: 'HtqQqS6cvwL', value: dataValue('HtqQqS6cvwL') },
          { dataElement: 'opPwLeINEmF', value: dataValue('opPwLeINEmF') },
          { dataElement: 'oMD1W0xV7Yr', value: dataValue('oMD1W0xV7Yr') },
          { dataElement: 'Jn4n8OfMXYz', value: dataValue('Jn4n8OfMXYz') },
          { dataElement: 'L4iVCs5duhL', value: dataValue('L4iVCs5duhL') },
          { dataElement: 'CvjCwS1scFL', value: dataValue('CvjCwS1scFL') },
          { dataElement: 'FQAZ72KH9Nk', value: dataValue('FQAZ72KH9Nk') },
          { dataElement: 'c2Y3WtgmVWA', value: dataValue('c2Y3WtgmVWA') },
          { dataElement: 'pL8tFrv0WZ1', value: dataValue('pL8tFrv0WZ1') },
          { dataElement: 'Hd4Zshsu8XL', value: dataValue('Hd4Zshsu8XL') },
          { dataElement: 'TZf8QKIQBs8', value: dataValue('TZf8QKIQBs8') },
          { dataElement: 'W3baoVgbpow', value: dataValue('W3baoVgbpow') },
          { dataElement: 'Bo3WVvQvGMT', value: dataValue('Bo3WVvQvGMT') },
          { dataElement: 'TxHKDU5pqfR', value: dataValue('TxHKDU5pqfR') },
          { dataElement: 'LXHsgPY5Dik', value: dataValue('LXHsgPY5Dik') },
          { dataElement: 'd7kxsVHcrlR', value: dataValue('d7kxsVHcrlR') },
          { dataElement: 'ZcrhvA0xVeq', value: dataValue('ZcrhvA0xVeq') },
        ],
        notes: [],
        relationships: [],
      },
    ],
    // enrollments: [
    //   {
    //     program:  state.data.program,
    //     orgUnit: state.data.orgUnit,
    //     enrollmentDate: state.data.enrollmentDate,
    //    // incidentDate: state.data.enrollmentDate,
    //   },
    // ],
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
    `https://testing.piirs.care.org/api/trackedEntityInstances${state.tei}`,
  json: state => state.body,
});

fn(state => {
  console.log(`Server response: ${JSON.stringify(state.body, null, 2)}`);
  return state;
});
