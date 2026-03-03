mongoose = require('mongoose')
const { Schema } = mongoose;

const shopSchema = new Schema({
    name: {
        typeof: String,
        required: [true, 'Shop must have a name']
    },
    town: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required!']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Shop = mongoose.model('Shop', shopSchema);
 
module.exports = Shop;