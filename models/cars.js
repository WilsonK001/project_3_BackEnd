const mongoose = require('mongoose')
const carsSchema = new mongoose.Schema(
    {
      image: String,
      make: String,
      model: String,
      year: Number,
      price: Number,
      mileage: Number

    }

)


const Car = mongoose.model('Car', carsSchema)

module.exports = Car 