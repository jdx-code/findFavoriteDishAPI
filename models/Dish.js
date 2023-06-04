const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,        
    },
    location: {
        type: String,
    },
    img: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Dish', DishSchema)