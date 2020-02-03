const parser = require('fast-xml-parser');
const he = require('he');

const fs = require('fs');

function getXMLfile(filePath) {
  if ((filePath == '') | (filePath == null)) return;

  let xf = fs.readFileSync(filePath, 'utf-8', function(err, data) {
    if (err) throw err;
    return data;
  });
  return xf;
}

function writeToFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, data);
  } catch (err) {
    console.error(err);
  }
}

var emeraldXml = getXMLfile('./file/emerald-config.xml');

const options = { arrayMode: false, attributeNamePrefix: '@_'/*, attrNodeName: 'attr' */, ignoreAttributes : false  };

try {
  var jsonObj = parser.parse(emeraldXml, options);
  //var tObj = parser.getTraversalObj(emeraldXml, options);
  console.log(JSON.stringify(jsonObj));
  //console.log('==========================================');
  //console.log(tObj);
} catch (error) {
  console.log(error.message);
}

writeToFile('./file/result1.xml', JSON.stringify(jsonObj));
