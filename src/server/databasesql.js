

module.exports.settings = {
  host:process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD_SECRET,
  database: process.env.DATABASE_NAME
  }

  /*var mysql=require('mysql')

var connection = mysql.createConnection({
    host:process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD_SECRET,
    database: process.env.DATABASE_NAME
});

connection.connect()
 */