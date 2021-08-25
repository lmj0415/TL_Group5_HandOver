const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const messageSchema = new Schema({
    author: {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
    },
    betreff : {
        type: String,
        require: true,
    },
    message : {
        type: String,
        require: true,
    },
}, {timestamps: true,});


//define model
module.exports = mongoose.model("Message", messageSchema); 