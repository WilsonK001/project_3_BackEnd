const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const cors = require('cors')


///Users Routes, get and post
users.get('/', (req, res)=>{
    User.find({}, (err, foundUser)=>{
        res.json(foundUser)
        
    })
})

// signup part
const saltRounds = 10
users.post('/', cors(), (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        User.create({
            username: username,
            password: hash
        }, (err, createdUser)=>{
            res.json(createdUser)
        })

    })
})

// login part
users.post('/log/', (req, res)=>{
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then((User) => {
        if (!User) {
            // username not found
            res.json('false')
        }
        else {
            bcrypt.compare(req.body.password, User.password, (err, result) => {
                if (result == true) {
                    // correct password
                    res.json(true)
                }
                else {
                    //incorrect
                    res.json(false)
                }
            })
        }

    })
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        User.create({
            username: username,
            password: hash
        }, (err, createdUser)=>{
            res.json(createdUser)
        })

    })
})

module.exports = users