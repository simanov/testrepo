const express = require('express');
const router = express.Router();

const dbConfig = require('../config/dbconfig');
const tns = require('../config/tnsnames');

router.get('/', (req, res) => {
  res.send('From API route');
});

router.route('/dbcheck').get(checkConnection);


async function checkConnection(req,res){
    let conn;
    try {
      conn = await dbConfig.connection('sysadm', 'sysadm1', await tns.getTNS('TBSCSDEV'));
      res.send('Connected to DB');
      console.log(conn.oracleServerVersionString);
    }catch (error) {
        console.log(error);
        res.send(error.message);
      } finally {
        if (conn) {
          await conn.close();
          res.end('Connection closed');
        }
      }
}



module.exports = router;
