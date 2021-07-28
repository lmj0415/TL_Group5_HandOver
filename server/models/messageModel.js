const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const messageSchema = new Schema({
    betreff: {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
    },
}, {timestamps: true,});


//define model
module.exports = mongoose.model("Message", messageSchema);