const express = require('express')
const app = express()
require('dotenv').config()



// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Peg & Wil')
})


//DATABASE
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;


// // Error / success
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// db.on('disconnected', () => console.log('mongo disconnected'));





//___________________
// Routes
//___________________
//localhost:3000
// app.get('/' , (req, res) => {
//     res.send('Hello World!')
  
  


app.listen(PORT, () => console.log( 'project3 loading......:', PORT));
