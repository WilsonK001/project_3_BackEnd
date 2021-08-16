const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const user = require('../models/users.js')


///Users Routes, get and post
users.get('/', (req, res)=>{
    user.find({}, (err, foundUser)=>{
        res.json(foundUser)
    })
    
})


users.post('/', (req, res)=>{
    user.create(req.body, (err, createdUser)=>{
        res.json(createdUser)
    })
})

module.exports = users