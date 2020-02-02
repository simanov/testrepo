const oracledb = require('oracledb');

async function connection(dbUser, dbPass, connStr) {
  return await oracledb.getConnection({
    user: dbUser,
    password: dbPass,
    connectString: connStr
  });
}


module.exports.connection = connection;
