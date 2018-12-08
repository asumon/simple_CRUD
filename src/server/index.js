//const ENV=require('dotenv')
//ENV.config();
require('dotenv').config();

const express = require('express')
const path = require('path')
const app = express()
const fs=require('fs')
//const route = require('./Routes/router');
const bodyParser=require('body-parser');
const mysql=require('mysql')
const config=require('./databasesql.js')



//morgan is the logger middleware function using the given format and options
// Basically for log
const morgan = require('morgan');
//THE WAY TO LET CLIENTS AND SERVERS
// COMMUNICATE EVEN IF THEY ARE NOT ON THE SAME DOMAIN 
//for Some Extra HTTP Headers
const cors=require('cors')


console.log(process.env.DATABASE_NAME)

//Log mode
app.use(morgan('short'));


const port = process.env.PORT || 5000
const buildPath = path.join(__dirname, '../../dist')

app.use(express.static(buildPath))

//app.use('/',route);
 //Thinking later

 app.get('/api/allmentors',(req,res)=>{
    const connection = mysql.createConnection(config.settings)
    //console.log(connection)
 connection.connect()
connection.query('select * from mentors',(err,data,fields)=>{

if(err){
    throw new Error()
}else {
    res.send(data)
   // console.log(data)
}
})
connection.end()
})


//Sends all the data from the edit form to the database and replaces it all.
//i diden't know how to only update the relevant data. Will optimize in the future.
//placeholders on all data from the client to correctly escape them to avoid SQLinjection attacks.
app.post('/api/updatementor', (req, res) => {
    const connection = mysql.createConnection(config.settings)
    connection.connect()
    connection.query(
      'UPDATE mentors SET first_name = ?, last_name = ?, bday = ?, type = ?, slack_nickname = ?, admission_date = ?, status = ? WHERE id= ?',
      [
        req.body.data.fName,
        req.body.data.lName,
        req.body.data.bDay,
        req.body.data.memberType,
        req.body.data.slackName,
        req.body.data.admission_date,
        req.body.data.status,
        req.body.data.id
      ],
      (err, results, fields) => {
        if (err) {
          throw new Error('Whoops! Could not send data to database! \n' + err)
        } else {
          res.status(200).send(results)
        }
      }
    )
    connection.end()
  })

//Sends all the data from the create form to the database, and escapes all data from the client.
app.post('/api/creatementor', (req, res) => {
    const connection = mysql.createConnection(config.settings)
    connection.connect()
    connection.query(
      'INSERT INTO mentors (first_name, last_name, bday, type, slack_nickname, admission_date, status) VALUES( ?, ?, ?, ?, ?, ?, ?)',
      [
        req.body.data.fName,
        req.body.data.lName,
        req.body.data.bDay,
        req.body.data.memberType,
        req.body.data.slackName,
        req.body.data.admission_date,
        req.body.data.status
      ],
      (err, results, fields) => {
        if (err) {
          throw new Error('Whoops! Could not send data to database! \n' + err)
        } else {
          res.status(200).send(results)
        }
      }
    )
    connection.end()
  })
  
//Hands off the id of the entry to be deleted.
app.post('/api/deletementor', (req, res) => {
    const connection = mysql.createConnection(config.settings)
    connection.connect()
    connection.query(
      'DELETE FROM mentors WHERE id = (?)',
      [req.body.id],
      (err, results, fields) => {
        if (err) {
          throw new Error('Whoops! Could not send data to database! \n' + err)
        } else {
          res.status(200).send(results)
        }
      }
    )
    connection.end()
  })





app.get('/*', function(req, res) {
    const indexPath = path.join(buildPath, 'index.html')
    res.sendFile(indexPath)
     }) 

app.listen(port, () => {
  console.log(` App is being served! On port ${port}`)
})