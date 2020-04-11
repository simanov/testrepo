const fs = require('fs');
const ssh2Promise = require('ssh2-promise');
const parser = require('fast-xml-parser');
const { JSONPath } = require('jsonpath-plus');
const path = require('path');


let xmlOptions = { arrayMode: false, attributeNamePrefix: '_', ignoreAttributes: false }

var tdbclinsshconn = {//host: '10.0.139.228',
    host: 'tdbclin.azercell.com',
    port: 22,
    username: 'root',
    password: 'St2z"T}'
};

password = 'St2z"T}';

tdbclinsshconn.password = password;

console.log(tdbclinsshconn);

var sshtdbclin = new ssh2Promise(tdbclinsshconn);

let containerEmerald = {
    localMainFolder: './Emerald_c1n3/2525new',
    confFolder: '/conf',
    remoteMainFolder: '/home/simanov/d01/2525new',
    remoteConfFileName: '/emerald-config.xml'
}

async function writeToFile(filepath, data) {
    try {
        let fp = await path.dirname(filepath);
        if (!fs.existsSync(fp)) {
            await fs.mkdirSync(fp, { recursive: true });
        }
        await fs.writeFileSync(filepath, data);
    } catch (err) {
        console.error(err);
    }
}

function getJsonObj(xmlfile, options = {}) {
    try {
        let jsonobj = parser.parse(xmlfile.split('\t').join(' '), options);
        return jsonobj;
    } catch (err) {
        console.log(err.message);
    }
}

async function getContanerEmerald(options, ssh) {
    let localConfFolder = options.localMainFolder + options.confFolder;
    let remoteConfFile = options.remoteMainFolder + options.confFolder + options.remoteConfFileName;

    let sftp = ssh.sftp();


    // let xmlStream = await sftp.readFile(remoteConfFile, { encoding: "utf8" });
    //let jsonObj = await getJsonObj(xmlStream, xmlOptions);

    let jsonObj = await getFileasJson(remoteConfFile, sftp);

    await writeToFile(localConfFolder + options.remoteConfFileName, JSON.stringify(jsonObj));

    let filearr = await getPlugin(jsonObj, jsonpath);

    console.log(filearr);

    for (let i in filearr) {
        let fl = filearr[i];
        let remoteConfFolder = options.remoteMainFolder + options.confFolder;
        let remoteFile = remoteConfFolder + fl.substring(7, fl.length);
        let localFile = localConfFolder + fl.substring(7, fl.length);
        if (fl.substring(0, 7) == '../conf') {
            let jsonObj = await getFileasJson(remoteFile, sftp);
            //await writeToFile(localFile, JSON.stringify(jsonObj));
            //console.log(localFile);
        }
    }



}



getContanerEmerald(containerEmerald, sshtdbclin);

async function getFileasJson(file, sftpClient) {
    let xmlStream = await sftpClient.readFile(file, { encoding: "utf8" });
    return await getJsonObj(xmlStream, xmlOptions);
}


let jsonpath = "$..plugin.[*]._configFile";

async function getPlugin(jobj, jpath) {
    let result = JSONPath(jpath, jobj);
    //.filter(x => x.substring(0, 5) !== '../..');
    return result;



}




/*
async function printData(inp, dirpath) {
    var data = await ssh.exec(inp);
    console.log('Who am I: ', data);
    var sftp = ssh.sftp();
    var list = await sftp.readdir(dirpath);
    let files = list.filter(x => x.longname[0] === '-')
        .filter(x => x.filename[0] !== '.')
        .filter(x => x.filename.substring(x.filename.length - 4, x.filename.length) === '.txt')
        .map(x => dirpath + '/' + x.filename);
    console.log(files);

    for (let i in files) {
        console.log(files[i]);
        let stream = await sftp.readFile(files[i], { encoding: "utf8" });
        console.log(stream);
    }

}

printData('whoami', '/home/simanov');

*/