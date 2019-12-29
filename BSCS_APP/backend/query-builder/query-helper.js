const oracledb = require('oracledb');

async function getResult(conn, sql, prm, outf) {
  if (prm == '') {
    params = [];
  } else {
    params = prm;
  }

  if (outf === 'object') {
    outfrmt = { outFormat: oracledb.OUT_FORMAT_OBJECT };
  } else {
    outfrmt = { outFormat: oracledb.OUT_FORMAT_ARRAY };
  }

  // SESSION Parameters
  await conn.execute(`ALTER SESSION SET NLS_DATE_LANGUAGE='AMERICAN'`);
  await conn.execute(`ALTER SESSION SET NLS_LANGUAGE='AMERICAN'`);
  await conn.execute(
    `ALTER SESSION SET NLS_DATE_FORMAT='DD.MM.YYYY HH24:MI:SS'`
  );
  await conn.execute(`ALTER SESSION SET TIME_ZONE='Atlantic/Reykjavik'`);

  return (result = await conn.execute(sql, params, outfrmt));
}

function getINparams(_str) {
  _str = replaceAll(_str, ' ', '');

  let strArr = _str.split(',');
  let strIN = '';

  for (let i = 0; i < strArr.length; i++) {
    strIN += ':' + (i + 1) + ',';
  }

  let result = [strIN.substr(0, strIN.length - 1), strArr];

  return result;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function getCols(jsonTable) {
  let colStr = '';
  for (var k in Object.keys(jsonTable)) {
    let z = Object.keys(jsonTable)[k];
    colStr += '{ "field": "' + z + '" }, ';
  }

  colStr = colStr.slice(0, -2);

  colStr = '{ "COLDEF": [ ' + colStr + ' ] }';
  return JSON.parse(colStr);
}

module.exports.getResult = getResult;
module.exports.getINparams = getINparams;
module.exports.getCols = getCols;
