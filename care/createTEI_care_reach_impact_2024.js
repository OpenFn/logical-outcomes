//Job to upload CSVs to DHIS2 'REACH AND IMPACT FORM' program
fn((state) => {
  state.teis = state.data.rows
    .filter((r) => r.SgQW3vpnhuL)
    .map((r) => {
      return {
        trackedEntityType: "bsDL4dvl2ni", //hardcoded for Reach form 
        orgUnit: r.orgUnit, //e.g., "Il7prf3KXCf",
        filter: [`SgQW3vpnhuL:EQ:${r.SgQW3vpnhuL}`],
        attributes: [
          {
            attribute: "INS05jiIWB0", //Col E date_start
            value: r.INS05jiIWB0, //INS05jiIWB0
          },
          {
            attribute: "nNbMsTUf3M6", //Col F date_end
            value: r.nNbMsTUf3M6,
          },
          {
            attribute: "MxQPuS9G7hh", //Col G geoscope
            value: r.MxQPuS9G7hh,
          },
          // {
          //   attribute: 'vFRzB344yiC', //Col H generated_id
          //   value: r.vFRzB344yiC,
          // },
          {
            attribute: "SgQW3vpnhuL", //Col I piirs_duid
            value: r.SgQW3vpnhuL,
          },
          {
            attribute: "mdGKgirgL27", //Col J password_duid
            value: r.mdGKgirgL27,
          },
          {
            attribute: "gRaQKQpzOMT", //Col K project_name
            value: r.gRaQKQpzOMT,
          },
          {
            attribute: "qoDbMxYz38O", //Col L name_acro
            value: r.qoDbMxYz38O,
          },
          {
            attribute: "GQZNUqYkmBc", //Col M main_goal
            value: r.GQZNUqYkmBc,
          },
          {
            attribute: "E4D2HUQgWdJ", //Col N tot_budget
            // value: r.E4D2HUQgWdJ.replace(/,/g, ""):,
            value: r.E4D2HUQgWdJ
            
          },
          {
            attribute: "Utq5wtup77d", //Col O contact_01
            value: r.Utq5wtup77d,
          },
          {
            attribute: "E7OPdJNeTEE", //Col P position_01
            value: r.E7OPdJNeTEE,
          },
          {
            attribute: "uRp4gkSKTJO", //Col Q email_01
            value: r.uRp4gkSKTJO,
          },
          {
            attribute: "VBjtTtPTZ8F", //Col Q contact_02
            value: r.VBjtTtPTZ8F,
          },
          {
            attribute: "LXmG6qfckEk", //Col S position_02
            value: r.LXmG6qfckEk,
          },
          {
            attribute: "dfSlw1Teyie", //Col Y email_02
            value: r.dfSlw1Teyie,
          },
          {
            attribute: "I3YOwQwEgKL", //Col U ind_ci
            value: r.I3YOwQwEgKL,
          },
          {
            attribute: "wOX24wrNi3x", //Col V geq_01_attribute
            value: r.wOX24wrNi3x,
          },
          {
            attribute: "xzJv4kznaTR", //Col W geq_02_attribute
            value: r.xzJv4kznaTR,
          },
          {
            attribute: "bRGpmrW1lnY", //Col X geq_03_attribute
            value: r.bRGpmrW1lnY,
          },
          {
            attribute: "K1Ko0eMYGUG", //Col Y geq_04_attribute
            value: r.K1Ko0eMYGUG,
          },
          {
            attribute: "BdPTbz4VUMz", //Col Z geq_05_attribute
            value: r.BdPTbz4VUMz,
          },
          {
            attribute: "NDAXlk67mnA", //Col AA geq_06_attribute
            value: r.NDAXlk67mnA ==='true' ? true : undefined,
          },
          {
            attribute: "cGCNm6yFef7", //Col AB geq_07_attribute
            value: r.cGCNm6yFef7,
          },
          {
            attribute: "XsiPtwWCVnj", //Col AC geq_08_attribute
            value: r.XsiPtwWCVnj,
          },
          {
            attribute: "bRF0Xp4wjfG", //Col AD geq_09_attribute
            value: r.bRF0Xp4wjfG,
          },
          {
            attribute: "A4TzkEjJ7fa", //Col AE geq_0geq_attribute
            value: r.A4TzkEjJ7fa,
          },
          {
            attribute: "XzwTExZEdvb", //Col AF path_10_attribute
            value: r.XzwTExZEdvb,
          },
          {
            attribute: "yyqYBuEsw7l", //Col AG path_11_attribute
            value: r.yyqYBuEsw7l,
          },
          {
            attribute: "SKsiWL2Cw6P", //Col AH path_12_attribute
            value: r.SKsiWL2Cw6P,
          },
          {
            attribute: "MWPOiIm46q3", //Col AI path_13_attribute
            value: r.MWPOiIm46q3,
          },
          {
            attribute: "atYjTDJyreU", //Col AJ path_14_attribute
            value: r.atYjTDJyreU,
          },
          {
            attribute: "EAzaG1tSBPi", //Col AK path_15_attribute
            value: r.EAzaG1tSBPi,
          },
          {
            attribute: "u8PSQOKP6co", //Col AL path_16_attribute
            value: r.u8PSQOKP6co,
          },
          {
            attribute: "CzGy37gqf2Q", //Col AM path_17_attribute
            value: r.CzGy37gqf2Q,
          },
          {
            attribute: "UKyDJ0H1Wgn", //Col AN path_18_attribute
            value: r.UKyDJ0H1Wgn,
          },
          {
            attribute: "H0UCdbFBGkJ", //Col AO hum_19_attribute
            value: r.H0UCdbFBGkJ,
          },
          {
            attribute: "svobIfFg36y", //Col AP hum_20_attribute
            value: r.svobIfFg36y,
          },
          {
            attribute: "ig8iyvnI6I1", //Col AQ hum_20.01_attribute
            value: r.ig8iyvnI6I1,
          },
          {
            attribute: "CRUBJey1aoJ", //Col AR hum_20.02_attribute
            value: r.CRUBJey1aoJ,
          },
          {
            attribute: "TH8heZwvxxh", //Col AS hum_20.03_attribute
            value: r.TH8heZwvxxh,
          },
          {
            attribute: "O7MsMQ696ya", //Col AT hum_20.04_attribute
            value: r.O7MsMQ696ya,
          },
          {
            attribute: "ZC7tmgcGQIl", //Col AU hum_20.05_attribute
            value: r.ZC7tmgcGQIl,
          },
          {
            attribute: "a3bGx8LqUaM", //Col AV hum_20.06_attribute
            value: r.a3bGx8LqUaM,
          },
          {
            attribute: "jaupVevuB98", //Col AW hum_20.07_attribute
            value: r.jaupVevuB98,
          },
          {
            attribute: "uYaCpHcAqWN", //Col AX hum_20.08_attribute
            value: r.uYaCpHcAqWN,
          },
          {
            attribute: "aM2VcOvvD9g", //Col AY hum_20.09_attribute
            value: r.aM2VcOvvD9g,
          },
          {
            attribute: "nnVZWu77M7Z", //Col AZ hum_20.10_attribute
            value: r.nnVZWu77M7Z,
          },
          {
            attribute: "vvPZDuqSOk2", //Col BA hum_20.11_attribute
            value: r.vvPZDuqSOk2,
          },
          {
            attribute: "GvRPlsBTclu", //Col BB hum_20.12_attribute
            value: r.GvRPlsBTclu,
          },
          {
            attribute: "XZzfjKjyFsX", //Col BC hum_20.13_attribute
            value: r.XZzfjKjyFsX,
          },
          {
            attribute: "EC3iOzU4SAf", //Col BD hum_0hum_attribute
            value: r.EC3iOzU4SAf,
          },
          {
            attribute: "KYhbhXgjTpJ", //Col BE r2h_22_attribute
            value: r.KYhbhXgjTpJ,
          },
          {
            attribute: "YjnM8RNSydp", //Col BF r2h_23_attribute
            value: r.YjnM8RNSydp,
          },
          {
            attribute: "v8ca8MpArHO", //Col BG r2h_24_attribute
            value: r.v8ca8MpArHO,
          },
          {
            attribute: "gJGD6peaHBN", //Col BH r2h_sup3_attribute
            value: r.gJGD6peaHBN,
          },
          {
            attribute: "eaNoBYvD3RI", //Col BI r2h_sup4_attribute
            value: r.eaNoBYvD3RI,
          },
          //*****************************************************//
          //NEW MAPPING FOR DEV INSTANCE - Updated 7 May 2024
          {
            attribute: "kX6jkGBkO3e", //Col BJ r2h_sup5_attribute - formerly id yWBpg9W1Xp8
            value: r.kX6jkGBkO3e,
          },
          //*****************************************************//
          {
            attribute: "a16xx0po2c8", //Col BK r2h_0r2h_attribute
            value: r.a16xx0po2c8,
          },
          {
            attribute: "U0ldtnbsh7G", //Col BL fwn_25_attribute
            value: r.U0ldtnbsh7G,
          },
          {
            attribute: "Bfm7KyxQI8E", //Col BM fwn_26_attribute
            value: r.Bfm7KyxQI8E,
          },
          {
            attribute: "xewT0WGIy8L", //Col BN fwn_27_attribute
            value: r.xewT0WGIy8L,
          },
          {
            attribute: "cCX2qFApDUO", //Col BO fwn_27_water_attribute
            value: r.cCX2qFApDUO,
          },
          {
            attribute: "n3dt8j2XBbl", //Col BP fwn_0fwn_attribute
            value: r.n3dt8j2XBbl,
          },
          {
            attribute: "R5LSZpVfHcW", //Col BQ clj_28_attribute
            value: r.R5LSZpVfHcW,
          },
          {
            attribute: "hNapUGKZT35", //Col BR clj_28.01_attribute
            value: r.hNapUGKZT35,
          },
          {
            attribute: "Rz35ZRPvZQU", //Col BS clj_28.02_attribute
            value: r.Rz35ZRPvZQU,
          },
          {
            attribute: "KC0r12h7oZl", //Col BT clj_28.03_attribute
            value: r.KC0r12h7oZl,
          },
          {
            attribute: "GzRMHWAIjdm", //Col BU clj_28.04_attribute
            value: r.GzRMHWAIjdm,
          },
          {
            attribute: "BwEULuDCB6f", //Col BV clj_28.05_attribute
            value: r.BwEULuDCB6f,
          },
          {
            attribute: "gtRRNSTFf6a", //Col BW clj_29_attribute
            value: r.gtRRNSTFf6a,
          },
          {
            attribute: "OkceLETTyHa", //Col BX clj_0clj_attribute
            value: r.OkceLETTyHa,
          },
          {
            attribute: "YMPsgxn3p6r", //Col BY wej_30_attribute
            value: r.YMPsgxn3p6r,
          },
          {
            attribute: "ioXVEwNhH3U", //Col BZ wej_0wej_attribute
            value: r.ioXVEwNhH3U,
          },
          {
            attribute: "XfSu5HUNznx", //Col CA ind_instruction
            value: r.XfSu5HUNznx,
          },
        ],
      };
    });
    
  console.log(state.teis.length, 'teis')
  return state;
});

each(
  "$.teis[*]",
  upsert(
    "trackedEntityInstances",
    state => ({
      ou: state.data.orgUnit,
      filter: state.data.filter,
      trackedEntityType: "bsDL4dvl2ni"
    }),
    state => {
      // Let's log this before we actually return it for the upsert
      console.log("What will we send?", state.data)
      return state.data
    }
  )
);