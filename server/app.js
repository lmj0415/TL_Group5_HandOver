require("dotenv").config() // require .env module
const express = require("express");
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")

const api = require('./routes/api.js');

//express app
const app = express();


//set api
app.use(cors())
app.use('/api/', api);


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
