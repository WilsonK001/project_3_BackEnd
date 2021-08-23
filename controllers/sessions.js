const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/users.js')

router.post('/', (req,res) => {
    console.log(req.body)
    User.findOne({username: req.body.username}, (error, foundUser) => {
        // console.log(req.body)
        if(error){
            res.json({error:"Database error"})
        } else if (!foundUser){
            res.json({error:"Incorrect username and/or password. Please try again."})
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser.username
                console.log(req.session)
                req.session.save()
                res.json(foundUser.username)
            } else {
                res.json({error:"Incorrect username and/or password. Please try again."})
            }
        }
    })
})


router.get('/', (req,res) => {
    console.log(req.session)
    if (req.session.currentUser){
        console.log(req.session.currentUser)
        res.json({username: req.session.username})
    } else {
        console.log("not logged in")
        res.json({error: "Not logged in."})
    }
})


router.delete('/', (req,res) => {
    req.session.destroy(() => {
        res.json("session destroyed")
    })
})

module.exports = router