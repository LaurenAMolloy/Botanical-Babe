const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Plant = require('./models/plant')

//Connect to db
mongoose.connect('mongodb://127.0.0.1:27017/plantApp')
.then(() =>{
    console.log("MONGO CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO ERROR MONGO")
    console.log(err)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF')
})

app.listen(8000, () => {
    console.log('LISTENING ON PORT 8000')
})