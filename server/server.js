const express = require('express');
const cors = require('cors');
const { place, cabs, cabStops } = require('./data/place');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const useCabs = require('./routes/useCab');

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json()) ;

app.use(cors());

app.get('/', function (req, res) {
    res.send("Hello world!");
});

//  app.get('/places', function(req, res){
//     res.send(place);
//  });

//  app.get('/cabs', function(req, res){
//     res.send(cabs);
//  });

//  app.get('/cabStops', function(req, res) {
//     res.send(cabStops);
//  })

app.use('/api/cabs', useCabs);

app.listen(port, console.log(`The localhost running ${port}`));