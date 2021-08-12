const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const user = require('../models/users.js')


///Users Routes, get and post
router.get('/users', (req, res)=>{
    user.find({}, (err, foundUser)=>{
        res.json(foundUser)
        
    })
})


router.post('/users', (req, res)=>{
    user.create(req.body, (err, createdUser)=>{
        res.json(createdUser)
    })
})