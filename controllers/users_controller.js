const bcrypt = require('bcrypt')
const e = require('express')
const express = require('express')
const users = express.Router()
const user = require('../models/users.js')


///Users Routes, get and post
users.get('/', (req, res)=>{
    user.find({}, (err, foundUser)=>{
        if (err)
            next(err)
        else
            res.send(foundUser)
    })
    
})


users.post('/', (req, res)=>{
    user.create(req.body, (err, createdUser)=>{
        res.json(createdUser)
    })
})

module.exports = users