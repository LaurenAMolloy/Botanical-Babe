mongoose = require('mongoose')
const { Schema } = mongoose;
const Plant = require('./plant')

const shopSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Shop must have a name']
    },
    town: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required!']
    },
    plants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Plant'
        }
    ]
})


shopSchema.post('findOneAndDelete', async function(shop) {
    if(shop.products.length){
        const res = Product.deleteMany({_id: { $in: farm.products }})
        console.log(res)
    }
});

const Shop = mongoose.model('Shop', shopSchema);
 
module.exports = Shop;