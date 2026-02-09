const mongoose = require('mongoose')

//EveryPlant must look like this...
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

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant