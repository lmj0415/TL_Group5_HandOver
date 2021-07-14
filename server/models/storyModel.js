const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const storySchema = new Schema({
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
module.exports = mongoose.model("Story", storySchema);