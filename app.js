require("dotenv").config() // require .env module
const express = require("express");
const app = express();
const hoganMiddleware = require("hogan-middleware");
const path = require("path")






//set views,
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "mustache")
app.engine("mustache", hoganMiddleware.__express)

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