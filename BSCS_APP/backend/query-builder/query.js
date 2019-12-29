
const dbConfig = require('../config/dbconfig');
const tns = require('../config/tnsnames');
const qh = require('./query-helper');
const sqltext = require('./sqltext');
const testAthlete = require('../wwtemp/athlete');

async function checkConnection(req, res) {
    let conn;
    try {
        conn = await dbConfig.connection(req.body.dbUser, req.body.dbPass, await tns.getTNS(req.body.db));
        res.json({ connection: 'SUCCES' });
    } catch (error) {
        res.json({ error: error.message });
    } finally {
        if (conn) {
            await conn.close();
            res.end('Connection closed');
        }
    }
}

async function getAthlete(req, res) {
    let a = testAthlete.getAT();
    res.send(a);
}

async function getAthleteCols(req, res) {
    let a = testAthlete.getATcols();
    res.send(a);
}

async function getNumberPrice(req, res) {
    let conn;
    try {
        conn = await dbConfig.connection(req.body.dbUser, req.body.dbPass, await tns.getTNS(req.body.db));
        //-----------------------------------------------------------
        let _digitsIN = qh.getINparams(req.body.digits);
        let resultStr = '{"RESULT":[]}';
        let resultJSON = JSON.parse(resultStr);

        let Tbl = '{"TABLE":[]}';
        let TblJson = JSON.parse(Tbl);

        let sqlGV = req.body.onlyprod ? sqltext.getSql('GVTAB', 'WH_GVTAB_MAXV') : sqltext.getSql('GVTAB');
        let _sqlRI = req.body.onlyprod ? sqltext.getSql('RITAB', 'WH_RITAB_MAXV') + sqltext.getSql('GROUPBY_RITAB') : sqltext.getSql('RITAB') + sqltext.getSql('GROUPBY_RITAB');
        let sqlRI = req.body.hide0row ? _sqlRI + sqltext.getSql('HAVING_RITAB') : _sqlRI;

        for (let i = 0; i < _digitsIN[1].length; i++) {
            resultJSON['RESULT'].push({ 'INPUT': _digitsIN[1][i], 'ZPTAB': [] });
            TblJson['TABLE'].push({ 'INPUT': _digitsIN[1][i] });


            // ===== ZPTAB =====
            let r_zp = await qh.getResult(conn, sqltext.getSql('ZPTAB'), [_digitsIN[1][i]], 'object');

            for (let zprow = 0; zprow < r_zp.rows.length; zprow++) {

                TblJson.TABLE[i] = { ...TblJson.TABLE[i], ...r_zp.rows[zprow] }

                // ===== GVTAB =====
                r_zp.rows[zprow].GVTAB = [];
                let r_gv = await qh.getResult(conn, sqlGV, [r_zp.rows[zprow].ZPCODE], 'object');

                for (let gvrow = 0; gvrow < r_gv.rows.length; gvrow++) {
                    r_zp.rows[zprow].GVTAB.push(r_gv.rows[gvrow]);
                    TblJson.TABLE[i] = { ...TblJson.TABLE[i], ...r_gv.rows[gvrow] }

                    // =====RITAB =====
                    r_gv.rows[gvrow].RITAB = [];
                    let r_ri = await qh.getResult(conn, sqlRI, [r_zp.rows[zprow].DIGITS, r_gv.rows[gvrow].GV, r_gv.rows[gvrow].GVVS, r_gv.rows[gvrow].ZN], 'object');

                    for (let rirow = 0; rirow < r_ri.rows.length; rirow++) {
                        r_gv.rows[gvrow].RITAB.push(r_ri.rows[rirow]);
                        TblJson.TABLE[i] = { ...TblJson.TABLE[i], ...r_ri.rows[rirow] }
                    }

                }


                resultJSON['RESULT'][i].ZPTAB.push(r_zp.rows[zprow]);

            }

        }

        //console.log('===================================================================================');
        //console.log(TblJson);
        resultJSON = { ...resultJSON, ...TblJson }
        //----------------------------------------------------------
        res.send(resultJSON.TABLE);


    } catch (error) {
        res.send(error.message);
    } finally {
        if (conn) {
            await conn.close();
            res.end('Connection closed');
        }
    }
}

module.exports.getNumberPrice = getNumberPrice;
module.exports.checkConnection = checkConnection;
module.exports.getAthlete = getAthlete;
module.exports.getAthleteCols = getAthleteCols;