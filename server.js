const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const { allowedNodeEnvironmentFlags } = require('process')
const carsController = require('./controllers/cars.js')
const db = mongoose.connection

const cors = require('cors')



// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT



////////MIDDLEWARE////
app.use(express.json())
app.use(cors())
app.use('/cars', carsController)

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
    res.send('Hello World!')
})

///////DATABASE CONNECTION////

mongoose.connect(
    'mongodb+srv://WilsonK:General@cluster0.flmdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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
