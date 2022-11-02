const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());

app.get('/', function(req, res){
    res.send("Hello world!");
 });
 
app.listen(port, console.log(`The localhost running ${port}`));