const DOMParser = require('xmldom').DOMParser;
const xp = require('xpath');
const fs = require('fs');

function getXml(filepath) {
  const xml = fs.readFileSync(filepath, 'utf8');
  const parser = new DOMParser();
  let xmlDom = parser.parseFromString(xml, 'application/xml');
  return xmlDom;
}

let xData = getXml('./xmlfiles/emerald-config.xml');

//getMainNodes(xData, 'config');

function getMainNodes(xml, node) {
  return xp.select('/' + node, xml);
}

let bases = getBaseElements(getMainNodes(xData, 'config'));
function getBaseElements(node) {
  let a = [];
  let n = node;
  // console.log(n.childNodes);

  if (n.hasChildNodes) {
    for (let i = 0; i < n.childNodes[i]; i++) {
      console.log(n.childNodes[i].nodeName);
    }
  }
  // return a;
}

console.log(bases);

////////////////////
/*function getChildNodes(node) {
  if (node.nodeType == 1) {
    console.log(node.nodeName + ' t=' + node.nodeType);
  }
  //console.log(node.childNodes.length);
  if (node.hasChildNodes && node.childNodes) {
    for (let i = 0; i < node.childNodes.length; i++) {
      let cn = node.childNodes[i];
      getChildNodes(node.childNodes[i]);
    }
  }
}

    "threadPools": [
      {
        "threadPool": [
          { "attr_": { "name": "default", "size": "40", "queueSize": "1000" } },
          { "attr_": { "name": "smsSender", "size": "1", "queueSize": "100" } },
          { "attr_": { "name": "balancePluginThreadPool", "size": "30", "queueSize": "5000" } },
          { "attr_": { "name": "vsmeSubscriptionPluginThreadPool", "size": "30", "queueSize": "3000" } }
        ]
      }
    ]
//////////////////////////////

    function getJSONObject(obj, arr, head) {
  let harr = arr;
  for (let o in obj) {
    let obk = Object.keys(obj[o]);
    for (let key in obk) {
      if (obk[key] == '10') {
        console.log('------10');
      }
      if (isNaN(obk[key])) {
        let dig = obk[key];
        console.log(dig);
        harr.push(obk[key]);
      }
    }
    if (typeof obj[o] == 'object') {
      if (Array.isArray(obj[o])) {
        console.log(JSON.stringify(obj[o]) + ' is ARRAY|||||||||||||||||||||||||\n');
      } else {
        console.log(JSON.stringify(obj[o]) + ' is OBJECT+++\n');
      }
      getJSONObject(obj[o], harr, '');
    } else {
      console.log(obj[o] + ' NOT OBJECT ------------');
    }
  }
  return harr;
}
*/

/* function xmlinput(obj, arr) {
  for (let o in obj) {
    if (typeof obj[o] == 'object') {
      xmlinput(obj[o], arr);
    } else {
      arr.push(JSON.parse(`{"${o}" : "${obj[o]}" }`));
    }
  }
  return arr;
} 
if (!/^[0-9]$/.test(o)) harr.push(head + '_' + o);

*/

///////////////////////////////
