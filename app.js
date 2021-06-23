require("dotenv").config() // require .env module
const express = require("express");
const app = express();
const path = require("path")






//set views,
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//set static assets
app.use(express.static(__dirname + "/public"))






//set routes
const index = require('./routes/index.js')
app.use('/', index);

//set Port 
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`)
})