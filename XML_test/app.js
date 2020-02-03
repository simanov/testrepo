/*
1	ELEMENT_NODE
2	ATTRIBUTE_NODE
3	TEXT_NODE
4	CDATA_SECTION_NODE
5	ENTITY_REFERENCE_NODE
6	ENTITY_NODE
7	PROCESSING_INSTRUCTION_NODE
8	COMMENT_NODE
9	DOCUMENT_NODE
10	DOCUMENT_TYPE_NODE
11	DOCUMENT_FRAGMENT_NODE
12	NOTATION_NODE
*/

const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

function getXMLfile(filePath) {
  if ((filePath == '') | (filePath == null)) return;

  let xf = fs.readFileSync(filePath, 'utf-8', function(err, data) {
    if (err) throw err;
    return data;
  });

  console.log('=====================================================');
  //console.log(whsXml(xf));
  console.log('=====================================================');
  return whsXml(xf);
}

function writeToFile(filePath, data) {
  // Write a string to another file and set the file mode to 0755
  try {
    fs.writeFileSync(filePath, data);
  } catch (err) {
    console.error(err);
  }
}

function whsXml(xmlStr) {
  let arr0 = xmlStr.split(/\r\n|\r|\n/);
  let arr1 = [];

  for (let k = 0; k < arr0.length; k++) {
    if (arr0[k].trim() !== '') {
      arr1.push(arr0[k].trim());
    }
  }
  str1 = arr1.join(' ');
  return str1.split('> <').join('><');
}

var emeraldXml = getXMLfile('./file/emerald-config.xml');

var doc = new DOMParser().parseFromString(emeraldXml);

var nodes = [];

var ndObj = {};

function getNodes(node, obj) {
  let a = {};
  a = { ...obj, ...getNodeContent(node) };
  if ((node.nodeType == 9) | (node.nodeType == 1)) {
    if (node.hasChildNodes) {
      a = { ...a, children: [] };
      if (node.hasAttributes) {
        let attr = node.attributes;
        if (attr && attr.length > 0) {
          let attr_arr = {};
          for (let atl = 0; atl < attr.length; atl++) {
            let atr = {};
            atr['@_' + attr[atl].name] = attr[atl].value;
            attr_arr = { ...attr_arr, ...atr };
          }
          //nv = { ...nv, attr: [] };
          a.children.push(attr_arr);
          //console.log('------------', nv, attr_arr);
        }
      }
      let b = {};
      for (let i = 0; i < node.childNodes.length; i++) {
        b = { ...b, ...getNodes(node.childNodes[i], b) };
        a.children.push(b);
      }
    }
  } else {
    a = { ...obj, ...getNodeContent(node) };
  }
  return a;
}

function getNodeContent(node, narr) {
  let nv = {};
  if ((node.nodeType == 1) | (node.nodeType == 9)) {
    nv = { ...nv, name: node.nodeName };
  }
  /* 
  if (node.hasAttributes) {
    let attr = node.attributes;
    if (attr && attr.length > 0) {
      let attr_arr = {};
      for (let atl = 0; atl < attr.length; atl++) {
        let atr = {};
        atr['@_' + attr[atl].name] = attr[atl].value;
        attr_arr = { ...attr_arr, ...atr };
      }
      nv = { ...nv, attr: [] };
      nv.attr.push(attr_arr);
      //console.log('------------', nv, attr_arr);
    }
  }
  */
  //if(node.nodeType == 8){console.log('+++++++++++++++++++++++++++++++++', node.nodeName, node.nodeValue)}
  return nv;
}

nodes.push(getNodes(doc, ndObj));
console.log(nodes);

writeToFile('./file/result.xml', JSON.stringify(nodes));
