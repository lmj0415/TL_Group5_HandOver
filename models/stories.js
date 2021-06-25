const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const storieSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },
}, {timestamps: true,});

//define model
const Storie = mongoose.model("Storie", storieSchema);
module.exports = Storie;