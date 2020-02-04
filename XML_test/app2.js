const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

function getXMLfile(filePath) {
    if ((filePath == '') | (filePath == null)) return;

    let xf = fs.readFileSync(filePath, 'utf-8', function (err, data) {
        if (err) throw err;
        return data;
    });

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

//---------------------------------------------------------------

var nodes = [];
var ndObj = {};

function getNodes(node, obj) {
    let a = {};
    a = { ...obj, ...getNodeName(node) };
    if (node.nodeType == 1 || node.nodeType == 9) {
        if (node.hasChildNodes) {
            a = { ...a, children: [] };
            if (node.hasAttributes) {
                let c = {};
                let attr = node.attributes;
                if (attr && attr.length > 0) {
                    //c = { name: 'attr', ...getNodeAttrs( attr) };
                    a.children.push(getNodeAttrs(attr));
                }
                //a.children.push(c);
            }
            let b = {};
            for (let i = 0; i < node.childNodes.length; i++) {
                b = { ...b, ...getNodes(node.childNodes[i], b) };
                a.children.push(b);
            }

        }
    }
    return a;
}

function getNodeName(node) {
    if (node.nodeType == 1 || node.nodeType == 9) {
        return { name: node.nodeName };
    }
    return;
}

function getNodeAttrs(attr) {
    let arr = { 'name': 'attr', children: [] }
    for (let i = 0; i < attr.length; i++) {
        arr.children.push({ name: attr[i].name + ' = ' + attr[i].value });
    }

    return arr;
}


nodes.push(getNodes(doc, ndObj));
writeToFile('./file/result2.xml', JSON.stringify(nodes));