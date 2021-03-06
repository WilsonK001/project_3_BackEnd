const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const { allowedNodeEnvironmentFlags } = require('process')
const db = mongoose.connection
const session = require('express-session')
const cors = require('cors')


// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT



////////MIDDLEWARE////
app.use(express.json())
app.use(cors())
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

const carsController = require('./controllers/cars.js')
const usersController = require('./controllers/users_controller.js')
const sessionsController = require('./controllers/sessions.js')

app.use('/cars', carsController)
app.use('/users', usersController)
app.use('/sessions', sessionsController)
app.use(express.urlencoded({extended: true }))


//DATABASE
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI





// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));





//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
    // res.send('Hello World!')
    res.redirect('/cars')
})

///////DATABASE CONNECTION////

mongoose.connect(

    MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod');
})
  
  


app.listen(PORT, () => console.log( 'project3 loading......:', PORT));

