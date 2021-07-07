require("dotenv").config() // require .env module
const express = require("express");
const path = require("path")
const mongoose = require("mongoose")

//express app
const app = express();


//set views,
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//set static assets
app.use(express.static(__dirname + "/public"))



//set routes
const index = require('./routes/index.js');
app.use('/', index);


//connect to MongoDB
const dbURI = process.env.MONGODB
mongoose.connect(dbURI, { useNewUrlParser:  true, useUnifiedTopology: true })
    .then((result) => {
        console.log("connected to MondoDB")
        //set Port 
        const PORT = process.env.PORT 
        app.listen(PORT, () => {
            console.log(`listening on Port: ${PORT}`)
        })
    })
    .catch((err) => console.log(err))