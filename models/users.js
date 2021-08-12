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

// signup part
const saltRounds = 10
users.post('/create', (req, res)=>{
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        user.create({
            username: username,
            password: hash
        }, (err, createdUser)=>{
            res.json(createdUser)
        })

    })
})

// login part
users.post('/', (req, res)=>{
    usre.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {
        if (!user) {
            // username not found
            res.json('false')
        }
        else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
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
        user.create({
            username: username,
            password: hash
        }, (err, createdUser)=>{
            res.json(createdUser)
        })

    })
})

module.exports = users