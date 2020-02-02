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

var emeraldXml = getXMLfile('./file/emerald-config.xml');

const options = {arrayMode: true};


try{
    var jsonObj = parser.parse(emeraldXml, options);
    var tObj = parser.getTraversalObj(emeraldXml,options);
    console.log(jsonObj);
    console.log('==========================================');
    console.log(tObj);
  }catch(error){
    console.log(error.message)
  }