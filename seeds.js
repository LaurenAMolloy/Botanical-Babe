const Plant = require('./models/plant')
const mongoose = require('mongoose')

//connect to mongoose
//run anytime for dev purposes
mongoose.connect('mongodb://127.0.0.1:27017/plantApp')
.then(() =>{
    console.log("MONGO CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO ERROR MONGO")
    console.log(err)
});

// const p = new Plant({
//     name: 'Fiddle Leaf Fig',
//     price: 45.00,
//     category: 'indoor',
//     water: 'weekly',
// });

// p.save()
// .then(p => {
//     console.log(p)
// })

seedPlants = [
    {
      name: "Snake Plant",
      price: 24.00,
      category: "Indoor",
      water: "Every 2–3 weeks"
    },
    {
      name: "Golden Pothos",
      price: 18.50,
      category: "Trailing",
      water: "Once a week"
    },
    {
      name: "ZZ Plant",
      price: 29.00,
      category: "Indoor",
      water: "Every 2–3 weeks"
    },
    {
      name: "Peace Lily",
      price: 22.00,
      category: "Flowering",
      water: "Once a week"
    },
    {
      name: "Aloe Vera",
      price: 16.00,
      category: "Succulent",
      water: "Every 2–3 weeks"
    }
  ]

//Insert Many
//If anything does not pass it will not be inserted
Plant.insertMany(seedPlants)
.then(res => console.log(res))
.catch(e => console.log(e))