const express = require('express')
const router = express.Router()
const Car = require('../models/cars.js')




///////////////////////////
/////////////ROUTES///////
/////////////////////////

/////INDEX/////
router.get('/get', (req, res)=>{
    Car.find({}, (err, foundCar)=>{
        res.json(foundCar)
    })
})




///////POST ROUTE/////
router.post('/', (req, res)=>{
    Car.create(req.body, (err, createdCar)=>{
        res.json(createdCar)
    })
})




/////////DELETE ROUTE///////
router.delete('/:id', (req, res)=>{
    Car.findByIdAndRemove(req.params.id, (err, deletedCar)=>{
        res.json(deletedCar)
    })
})



//////UPDATE ROUTE/////
router.put('/:id', (req, res)=>{
    Car.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedCar)=>{
        res.json(updatedCar)
    })

})



router.get('/', (req, res)=>{
    res.send('index')
})


module.exports = router
