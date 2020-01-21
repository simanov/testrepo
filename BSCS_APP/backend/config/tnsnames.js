module.exports = {
    tnsString: {
      BSCS:
        '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP) (HOST = 10.0.153.20)(PORT = 1521)) (CONNECT_DATA = (SID = BSCS)))',
  
      TBSCSDEV:
        '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP) (HOST = TBSCSARC.AZERCELL.COM)(PORT = 1522)) (CONNECT_DATA = (SERVICE_NAME = TBSCSDEV)))',
  
      POLIS_EXA:
        '(DESCRIPTION= (ADDRESS= (PROTOCOL=TCP) (HOST=azstb-scan) (PORT=1521) ) (CONNECT_DATA= (SERVER=dedicated) (SERVICE_NAME=POLISI.AZERCELL.COM) ) )',
  
      AIRDR:
        '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = airdr.azercell.com)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SID = AIRDR)))',
  
      OtherDB: 'connStr_here'
    }
  };
  
  function getTNS(tnsName) {
    const tns = this.tnsString;
    if (tnsName === 'BSCS') {
      return tns.BSCS;
    } else if (tnsName === 'TBSCSDEV') {
      return tns.TBSCSDEV;
    } else if (tnsName === 'POLIS_EXA') {
      return tns.POLIS_EXA;
    } else if (tnsName === 'AIRDR') {
      return tns.AIRDR;
    }
  }
  
  module.exports.getTNS = getTNS;
  