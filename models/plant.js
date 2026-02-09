const mongoose = require('mongoose')

//Define the Shape of the Plant
//Rules to follow!
const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['indoor', 'outdoor', 'succulent', 'flowering', 'trailing' ]
    },
    light: {
        type: String,
    },
    water: {
        type: String
    } 
})

//Using Mongoose create a Model called Plant
const Plant = mongoose.model('Plant', plantSchema);

//Plant.create()

module.exports = Plant