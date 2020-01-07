// parseCSV(
//   `START DATE (MM/YY),Org unit,Org Unit UID,PARTNER,Category option UID,LATITUDE (NORTH+/ SOUTH-),LATITUDE (EAST/ WEST),bnQOk4Plo9Z,TLjYqcKwhxP,ScSWoiqvdp5,j38AUmNNy18,F2FjwHE7MTs,g5QDO6GPgiJ,zC1KsiGDVMk,yF9ytRRv4qY,vAh7VEB6L0f,IyW6h3oi1Gd,LZ0FOPRvtdm,kP5o7Ud1Vd4,uFUTTqkEVtz,JIb0HKi7MLq,x7X1y7b4tAu,VMyJ10uue3t,yH9GVEG6Pya,k7ZrxD00oTk,wvKDeTzKnOw,fohag7LHogI,gkFvMlQR7mD,GUjfts8o2I3,oiiWce30HFA,RJDAG9P1o68,Vl0MZ8bG3Mj,ZH28Ef03rWf,lSgPvELDL1f,t65Q6g7ZyDH,dtgxdpuv1gi,YZXBjzU3qq6,y7ffvo37Unv,LmWgNlOgEmJ,iADbtBlMxTs,sYUhjK3UdP1,l4pKaxmLOrW,otlK2nqPJd1,frjA2JXh9cY,Eh89gu65Xnd,I3mYNeMDixy,fK3Pqv7IWo7,PrPEHhALnzl,Nh894w42Ti4,mZrNVMSr9QN,TVsbvQkpi17,ldl5hinz5TC,mwNDjqVe6C2,ylfCWUBbiZk,jpS0aEcFGy8,LzIigcjxapS,VOgnzzSuYZX,YdBzuMj0CSh,XmM7gBcfg6P,HN09RtK91MC
// 1/1/17,Unknown (Murang'a),e5CYXI5Ncay,SACDEP,vwGC12Ipn10,,,Michael Muruga,A. Wainaina Ndung'u,,,Male,726412820,,,,,,50000,2000,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`,
//   {
//     columns: true,
//     skip_empty_lines: true,
//   }
// );

parseCSV(
  '/home/taylor/Dropbox (OpenFn)/Projects/Logical Outcomes/LOThika-Chania_farmers_Nov2019CLEAN__revised (copy).csv',
  {
    columns: true,
    skip_empty_lines: true,
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
