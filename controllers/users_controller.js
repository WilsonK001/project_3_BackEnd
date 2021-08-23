const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')


///Users Routes, get and post
users.get('/', (req, res)=>{
    console.log("listing users")
    User.find({}, (err, foundUser)=>{
        res.json(foundUser)
    })
})

// signup part
const saltRounds = 10
users.post('/', (req, res)=>{
    console.log("creating new User")
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        User.create({
            username: req.body.username,
            password: hash
        }, (err, createdUser)=>{
            res.json(createdUser)
        })

    })
})

module.exports = users