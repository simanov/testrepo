const CryptoJS = require('crypto-js');

const ck = 'BFNpSSSuUjM07orrlDSCTN30OkfmlgHli5unHMaaQ3wWTKQOWKelxnfJslTgYFW6YCNuBwJK3GG2ey9hGUKIzVmcqfHkn8dRFd0u';

function getPublicKeys(pw, uname) {
  let pk = [];
  let p1 = CryptoJS.AES.encrypt(pw, pw + uname + ck);
  let p2 = CryptoJS.AES.encrypt(pw, p1 + uname + ck);

  pk[0] = p1;
  pk[1] = p2;

  return pk;
}

function getPassword(publicKey0, publicKey1, uname){
    let bytes = CryptoJS.AES.decrypt( publicKey1, publicKey0 + uname + ck );
    return bytes.toString(CryptoJS.enc.Utf8);
}


module.exports.getPublicKeys = getPublicKeys;
module.exports.getPassword = getPassword;

