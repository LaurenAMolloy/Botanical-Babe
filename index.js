const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');

const methodOverride = require('method-override')


const Plant = require('./models/plant');

//Connect to db
mongoose.connect('mongodb://127.0.0.1:27017/plantApp')
.then(() =>{
    console.log("MONGO CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO ERROR MONGO")
    console.log(err)
});

//When I render a view look in the views folder
app.set('views', path.join(__dirname, 'views'));

//What file type is used for rendering
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Middleware
app.use(express.urlencoded({ extended: true }) )
app.use(methodOverride('_method'))

const categories = [
    'indoor',
    'outdoor',
    'trailing',
    'flowering',
    'succulent'
]

//REST 
//Represtational State Transfer

//Static routes first
app.get('/plants', async (req, res) => {
    //Use Plant Model to fetch all plants!
    const plants = await Plant.find({})
    //Controller logic
    res.render('plants/index', { plants })
});

app.get('/plants/new', (req, res) => {
    res.render('plants/new', { categories })
});

app.post('/plants', async (req, res) => {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    console.log(newPlant)
    //redirect to show page
    res.redirect(`/plants/${newPlant._id}`)
});

//Details Page for a single Product
app.get('/plants/:id', async(req, res) => {
    //find product based on unique id
    const { id } = req.params;
    const plant = await Plant.findById(id);
    console.log(plant)
    res.render('plants/show', { plant }) 
})

//edit form
app.get('/plants/:id/edit', async(req, res) => {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    res.render('plants/edit', { plant, categories });
})

app.put('/plants/:id', async(req, res) => {
    const { id } = req.params;
    const plant = await Plant.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    //Do not respond directly from put or patch
    res.redirect(`/plants/${plant._id}`)
})

app.delete('/plants/:id', async (req,res) => {
    const { id } = req.params;
    const deletedProduct = await Plant.findByIdAndDelete(id);
    res.redirect('/plants');
})

app.listen(8000, () => {
    console.log('LISTENING ON PORT 8000')
})