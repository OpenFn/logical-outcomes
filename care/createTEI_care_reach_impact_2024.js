//Job to upload CSVs to DHIS2 'REACH AND IMPACT FORM' program
fn(state => {
  const { csvData } = state.data.rows;
  return state;
});

//TODO: Consider if we will always create or if we need to UPSERT the TEIs ======//
//TODO: Consider if enrollement will already exist or not =========//
createTEI({
  trackedEntityType: 'bsDL4dvl2ni', //hardcoded for Reach form
  orgUnit: dataValue('csvData.orgUnit')(state), //e.g., "Il7prf3KXCf",
  attributes: state => [
    {
      attribute: 'INS05jiIWB0', //Col E date_start
      value: dataValue('csvData.Enrollment date')(state), //INS05jiIWB0
    },
    {
      attribute: 'nNbMsTUf3M6', //Col F date_end
      value: dataValue('csvData.nNbMsTUf3M6')(state),
    },
    {
      attribute: 'MxQPuS9G7hh', //Col G geoscope
      value: dataValue('csvData.MxQPuS9G7hh')(state),
    },
    {
      attribute: 'vFRzB344yiC', //Col H generated_id
      value: dataValue('csvData.vFRzB344yiC')(state),
    },
    {
      attribute: 'SgQW3vpnhuL', //Col I piirs_duid
      value: dataValue('csvData.SgQW3vpnhuL')(state),
    },
    {
      attribute: 'mdGKgirgL27', //Col J password_duid
      value: dataValue('csvData.mdGKgirgL27')(state),
    },
    {
      attribute: 'gRaQKQpzOMT', //Col K project_name
      value: dataValue('csvData.gRaQKQpzOMT')(state),
    },
    {
      attribute: 'qoDbMxYz38O', //Col L name_acro
      value: dataValue('csvData.qoDbMxYz38O')(state),
    },
    {
      attribute: 'GQZNUqYkmBc', //Col M main_goal
      value: dataValue('csvData.GQZNUqYkmBc')(state),
    },
    {
      attribute: 'E4D2HUQgWdJ', //Col N tot_budget
      value: dataValue('csvData.E4D2HUQgWdJ')(state).replace(/,/g, ''),
    },
    {
      attribute: 'Utq5wtup77d', //Col O contact_01
      value: dataValue('csvData.Utq5wtup77d')(state),
    },
    {
      attribute: 'E7OPdJNeTEE', //Col P position_01
      value: dataValue('csvData.E7OPdJNeTEE')(state),
    },
    {
      attribute: 'uRp4gkSKTJO', //Col Q email_01
      value: dataValue('csvData.uRp4gkSKTJO')(state),
    },
    {
      attribute: 'VBjtTtPTZ8F', //Col Q contact_02
      value: dataValue('csvData.VBjtTtPTZ8F')(state),
    },
    {
      attribute: 'VBjtTtPTZ8F', //Col R contact_02
      value: dataValue('csvData.VBjtTtPTZ8F')(state),
    },
    {
      attribute: 'LXmG6qfckEk', //Col S position_02
      value: dataValue('csvData.LXmG6qfckEk')(state),
    },
    {
      attribute: 'dfSlw1Teyie', //Col Y email_02
      value: dataValue('csvData.dfSlw1Teyie')(state),
    },
    {
      attribute: 'I3YOwQwEgKL', //Col U ind_ci
      value: dataValue('csvData.I3YOwQwEgKL')(state),
    },
    {
      attribute: 'wOX24wrNi3x', //Col V geq_01_attribute
      value: dataValue('csvData.wOX24wrNi3x')(state),
    },
    {
      attribute: 'xzJv4kznaTR', //Col W geq_02_attribute
      value: dataValue('csvData.xzJv4kznaTR')(state),
    },
    {
      attribute: 'bRGpmrW1lnY', //Col X geq_03_attribute
      value: dataValue('csvData.bRGpmrW1lnY')(state),
    },
    {
      attribute: 'K1Ko0eMYGUG', //Col Y geq_04_attribute
      value: dataValue('csvData.K1Ko0eMYGUG')(state),
    },
    {
      attribute: 'BdPTbz4VUMz', //Col Z geq_05_attribute
      value: dataValue('csvData.BdPTbz4VUMz')(state),
    },
    {
      attribute: 'NDAXlk67mnA', //Col AA geq_06_attribute
      value: dataValue('csvData.NDAXlk67mnA')(state),
    },
    {
      attribute: 'NDAXlk67mnA', //Col AA geq_06_attribute
      value: dataValue('csvData.NDAXlk67mnA')(state),
    },
    {
      attribute: 'cGCNm6yFef7', //Col AB geq_07_attribute
      value: dataValue('csvData.cGCNm6yFef7')(state),
    },
    {
      attribute: 'XsiPtwWCVnj', //Col AC geq_08_attribute
      value: dataValue('csvData.XsiPtwWCVnj')(state),
    },
    {
      attribute: 'bRF0Xp4wjfG', //Col AD geq_09_attribute
      value: dataValue('csvData.bRF0Xp4wjfG')(state),
    },
    {
      attribute: 'A4TzkEjJ7fa', //Col AE geq_0geq_attribute
      value: dataValue('csvData.A4TzkEjJ7fa')(state),
    },
    {
      attribute: 'XzwTExZEdvb', //Col AF path_10_attribute
      value: dataValue('csvData.XzwTExZEdvb')(state),
    },
    {
      attribute: 'yyqYBuEsw7l', //Col AG path_11_attribute
      value: dataValue('csvData.yyqYBuEsw7l')(state),
    },
    {
      attribute: 'SKsiWL2Cw6P', //Col AH path_12_attribute
      value: dataValue('csvData.SKsiWL2Cw6P')(state),
    },
    {
      attribute: 'MWPOiIm46q3', //Col AI path_13_attribute
      value: dataValue('csvData.MWPOiIm46q3')(state),
    },
    {
      attribute: 'atYjTDJyreU', //Col AJ path_14_attribute
      value: dataValue('csvData.atYjTDJyreU')(state),
    },
    {
      attribute: 'EAzaG1tSBPi', //Col AK path_15_attribute
      value: dataValue('csvData.EAzaG1tSBPi')(state),
    },
    {
      attribute: 'u8PSQOKP6co', //Col AL path_16_attribute
      value: dataValue('csvData.u8PSQOKP6co')(state),
    },
    {
      attribute: 'CzGy37gqf2Q', //Col AM path_17_attribute
      value: dataValue('csvData.CzGy37gqf2Q')(state),
    },
    {
      attribute: 'UKyDJ0H1Wgn', //Col AN path_18_attribute
      value: dataValue('csvData.UKyDJ0H1Wgn')(state),
    },
    {
      attribute: 'UKyDJ0H1Wgn', //Col AN path_18_attribute
      value: dataValue('csvData.UKyDJ0H1Wgn')(state),
    },
    {
      attribute: 'H0UCdbFBGkJ', //Col AO hum_19_attribute
      value: dataValue('csvData.H0UCdbFBGkJ')(state),
    },
    {
      attribute: 'svobIfFg36y', //Col AP hum_20_attribute
      value: dataValue('csvData.svobIfFg36y')(state),
    },
    {
      attribute: 'ig8iyvnI6I1', //Col AQ hum_20.01_attribute
      value: dataValue('csvData.ig8iyvnI6I1')(state),
    },
    {
      attribute: 'CRUBJey1aoJ', //Col AR hum_20.02_attribute
      value: dataValue('csvData.CRUBJey1aoJ')(state),
    },
    {
      attribute: 'TH8heZwvxxh', //Col AS hum_20.03_attribute
      value: dataValue('csvData.TH8heZwvxxh')(state),
    },
    {
      attribute: 'O7MsMQ696ya', //Col AT hum_20.04_attribute
      value: dataValue('csvData.O7MsMQ696ya')(state),
    },
    {
      attribute: 'ZC7tmgcGQIl', //Col AU hum_20.05_attribute
      value: dataValue('csvData.ZC7tmgcGQIl')(state),
    },
    {
      attribute: 'a3bGx8LqUaM', //Col AV hum_20.06_attribute
      value: dataValue('csvData.a3bGx8LqUaM')(state),
    },
    {
      attribute: 'jaupVevuB98', //Col AW hum_20.07_attribute
      value: dataValue('csvData.jaupVevuB98')(state),
    },
    {
      attribute: 'uYaCpHcAqWN', //Col AX hum_20.08_attribute
      value: dataValue('csvData.uYaCpHcAqWN')(state),
    },
    {
      attribute: 'aM2VcOvvD9g', //Col AY hum_20.09_attribute
      value: dataValue('csvData.aM2VcOvvD9g')(state),
    },
    {
      attribute: 'nnVZWu77M7Z', //Col AZ hum_20.10_attribute
      value: dataValue('csvData.nnVZWu77M7Z')(state),
    },
    {
      attribute: 'vvPZDuqSOk2', //Col BA hum_20.11_attribute
      value: dataValue('csvData.vvPZDuqSOk2')(state),
    },
    {
      attribute: 'GvRPlsBTclu', //Col BB hum_20.12_attribute
      value: dataValue('csvData.GvRPlsBTclu')(state),
    },
    {
      attribute: 'XZzfjKjyFsX', //Col BC hum_20.13_attribute
      value: dataValue('csvData.XZzfjKjyFsX')(state),
    },
    {
      attribute: 'EC3iOzU4SAf', //Col BD hum_0hum_attribute
      value: dataValue('csvData.EC3iOzU4SAf')(state),
    },
    {
      attribute: 'KYhbhXgjTpJ', //Col BE r2h_22_attribute
      value: dataValue('csvData.KYhbhXgjTpJ')(state),
    },
    {
      attribute: 'YjnM8RNSydp', //Col BF r2h_23_attribute
      value: dataValue('csvData.YjnM8RNSydp')(state),
    },
    {
      attribute: 'v8ca8MpArHO', //Col BG r2h_24_attribute
      value: dataValue('csvData.v8ca8MpArHO')(state),
    },
    {
      attribute: 'gJGD6peaHBN', //Col BH r2h_sup3_attribute
      value: dataValue('csvData.gJGD6peaHBN')(state),
    },
    {
      attribute: 'eaNoBYvD3RI', //Col BI r2h_sup4_attribute
      value: dataValue('csvData.eaNoBYvD3RI')(state),
    },
    {
      attribute: 'yWBpg9W1Xp8', //Col BJ r2h_sup5_attribute
      value: dataValue('csvData.yWBpg9W1Xp8')(state),
    },
    {
      attribute: 'a16xx0po2c8', //Col BK r2h_0r2h_attribute
      value: dataValue('csvData.a16xx0po2c8')(state),
    },
    {
      attribute: 'U0ldtnbsh7G', //Col BL fwn_25_attribute
      value: dataValue('csvData.U0ldtnbsh7G')(state),
    },
    {
      attribute: 'Bfm7KyxQI8E', //Col BM fwn_26_attribute
      value: dataValue('csvData.Bfm7KyxQI8E')(state),
    },
    {
      attribute: 'xewT0WGIy8L', //Col BN fwn_27_attribute
      value: dataValue('csvData.xewT0WGIy8L')(state),
    },
    {
      attribute: 'cCX2qFApDUO', //Col BO fwn_27_water_attribute
      value: dataValue('csvData.cCX2qFApDUO')(state),
    },
    {
      attribute: 'n3dt8j2XBbl', //Col BP fwn_0fwn_attribute
      value: dataValue('csvData.n3dt8j2XBbl')(state),
    },
    {
      attribute: 'R5LSZpVfHcW', //Col BQ clj_28_attribute
      value: dataValue('csvData.R5LSZpVfHcW')(state),
    },
    {
      attribute: 'hNapUGKZT35', //Col BR clj_28.01_attribute
      value: dataValue('csvData.hNapUGKZT35')(state),
    },
    {
      attribute: 'Rz35ZRPvZQU', //Col BS clj_28.02_attribute
      value: dataValue('csvData.Rz35ZRPvZQU')(state),
    },
    {
      attribute: 'KC0r12h7oZl', //Col BT clj_28.03_attribute
      value: dataValue('csvData.KC0r12h7oZl')(state),
    },
    {
      attribute: 'GzRMHWAIjdm', //Col BU clj_28.04_attribute
      value: dataValue('csvData.GzRMHWAIjdm')(state),
    },
    {
      attribute: 'BwEULuDCB6f', //Col BV clj_28.05_attribute
      value: dataValue('csvData.BwEULuDCB6f')(state),
    },
    {
      attribute: 'gtRRNSTFf6a', //Col BW clj_29_attribute
      value: dataValue('csvData.gtRRNSTFf6a')(state),
    },
    {
      attribute: 'OkceLETTyHa', //Col BX clj_0clj_attribute
      value: dataValue('csvData.OkceLETTyHa')(state),
    },
    {
      attribute: 'YMPsgxn3p6r', //Col BY wej_30_attribute
      value: dataValue('csvData.YMPsgxn3p6r')(state),
    },
    {
      attribute: 'ioXVEwNhH3U', //Col BZ wej_0wej_attribute
      value: dataValue('csvData.ioXVEwNhH3U')(state),
    },
    {
      attribute: 'XfSu5HUNznx', //Col CA ind_instruction
      value: dataValue('csvData.XfSu5HUNznx')(state),
    },
  ],
  enrollments: [
    {
      orgUnit: dataValue('csvData.orgUnit')(state), //e.g., "Il7prf3KXCf",
      program: 'oMmNYMeUSKX', //REACH AND IMPACT FORM
      //programStage: 'k5vUtGga5yY', //General Info //OLD MAPPING FROM '22 import
      enrollmentDate: dataValue('csvData.Enrollment date')(state),
      incidentDate: dataValue('csvData.Enrollment date')(state),
    },
  ],
});