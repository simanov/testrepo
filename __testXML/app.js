const fs = require('fs');
const parser = require('fast-xml-parser');
const html_tablify = require('html-tablify');

let res = [];

// getConfig('./files/emerald-config.xml');

getConfig('./files/pptc.xml');
//console.log(res);

writeToFile('./results/res_1.xml', JSON.stringify(res));

function getXmlFile(filepath) {
  if ((filepath == '') | (filepath == null)) return;
  let xf = fs.readFileSync(filepath, 'utf-8', function (err, data) {
    if (err) {
      console.error(err.message);
    }
    return data;
  });

  console.log('=====================================================');
  console.log(xf);
  console.log('=====================================================');
  return xf;
}

function writeToFile(filepath, data) {
  try {
    fs.writeFileSync(filepath, data);
  } catch (err) {
    console.error(err);
  }
}

function getJsonObj(xmlfile, options = {}) {
  try {
    let jsonobj = parser.parse(xmlfile.split('\t').join(' '), options);
    //return str1.split('> <').join('><');
    return jsonobj;
  } catch (err) {
    console.log(err.message);
  }
}

function getChildNodes(obj, deep, maxdeep, path = '') {
  let pth = path + '/';
  if (deep < maxdeep) {
    if (typeof obj == 'object') {
      deep++;
      for (let o in obj) {
        let ks = Object.keys(obj[o]);
        if (typeof obj[o] == 'object') {
          pth = pth + o + '/';
          for (let k in ks) {
            let kv = ks[k];
            let ko = obj[o][kv];
            if (typeof ko != 'object') {
              pthk = pth + kv + '/';
              res.push(JSON.parse(`{"${pthk}": "${ko}"}`));
            } else {
              pthk = pth + kv;
            }
            if (!isNaN(kv) & (typeof ks == 'object')) {
              getChildNodes(obj[o][kv], deep, maxdeep, pthk);
            }
            getChildNodes(obj[o][kv], deep, maxdeep, pthk);
          }
        } else {
          pthc = pth + o;
          res.push(JSON.parse(`{"${pthc}": "${obj[o]}"}`));
        }
      }
    }
  }
}

function getConfig(xmlfilepath, maxdeep = 10, deep = 0, path = '', options = { arrayMode: false, attributeNamePrefix: '@_', ignoreAttributes: false }) {
  res = [];
  let xmlfile = getXmlFile(xmlfilepath);
  let jsonobj = getJsonObj(xmlfile, options);
  getChildNodes(jsonobj, deep, maxdeep, path);
}

function getArray(resultarray) {
  let arr = [];
  for (let o in resultarray) {
    let ks = Object.keys(resultarray[o]);
    let pathvalue = ks[0];
    let kv = resultarray[o][ks];

    let a0 = getPathandHead(pathvalue);
    a0.push(kv);
    arr.push(a0);
  }
  return arr.map((x) => [x[0].replace('/config/', ''), x[1], x[2]]);
}

function getPathHeader(arr) {
  let a0 = [...new Set(arr.map((x) => x[0]))];
  let a2 = [];

  for (let i in a0) {
    let a1 = splitLastFind(a0[i], '/');
    if (!isNaN(a1[1])) {
      a2.push(a1[0]);
    } else {
      a2.push(a0[i]);
    }
  }

  return [...new Set(a2)];
}

function getRowHeader(arr) {
  return [...new Set(arr.map((x) => x[0]))];
}

function listTables(head, rowh, body) {
  let arr = [];
  for (let h in head) {
    let tarr = [];
    let hi = head[h];
    for (let r in rowh) {
      let trow = {};
      let ri = rowh[r];
      if (ri.indexOf(hi) >= 0 && (ri.length == hi.length || !isNaN(splitLastFind(ri, '/')[1]))) {
        trow = JSON.parse(`{"path": "${ri}"}`);
        for (let b in body) {
          let bi = body[b];
          if (bi[0].indexOf(ri) >= 0 && bi[0].length == ri.length) {
            let row = JSON.parse(`{"${bi[1]}": "${bi[2]}"}`);
            trow = { ...trow, ...row };
          }
        }
      }
      if (!isEmpty(trow)) {
        tarr.push(trow);
      }
    }
    arr.push(tarr);
  }

  return arr;
}

function getHtmlTable(jdata) {
  let t = [];
  for (let d in jdata) {
    let options = { data: jdata[d] };
    t.push(html_tablify.tablify(options));
  }

  return t;
}

//====================

function removeIfLastStr(str, find) {
  if (str.substr(str.length - 1, str.length) == find) {
    return removeLastChar(str);
  }
  return str;
}

function removeLastChar(str) {
  return str.slice(0, str.length - 1);
}

function splitLastFind(str, find) {
  let tarr = [];
  let ls = str.lastIndexOf(find);
  tarr.push(str.substr(0, ls), str.substr(ls + 1, str.length - ls));
  return tarr;
}

function getPathandHead(str) {
  let tstr = removeIfLastStr(str, '/');
  return splitLastFind(tstr, '/');
}

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function printArray(arr) {
  let str = '';
  for (let i in arr) {
    str = str + arr[i] + '\n';
  }
  return str;
}

let a0 = getArray(res);

let a1 = getPathHeader(a0);

let r1 = getRowHeader(a0);

let a2 = listTables(a1, r1, a0);

let tbl = getHtmlTable(a2);

// console.log(a2);

// writeToFile('./results/headers.xml', printArray(a2));

writeToFile('./results/headers.xml', printArray(tbl));

// writeToFile('./results/headers.xml', a2);

//console.log(pathHeader);
