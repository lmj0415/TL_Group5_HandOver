const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const storieSchema = new Schema({
    Name: {
        type: String,
        require: true,
    },
    Subheading: {
        type: String,
        require: true,
    },
    Quote: {
        type: String,
        require: true,
    },
    Title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },
}, {timestamps: true,});


//define model
const Story = mongoose.model("Storie", storieSchema);
module.exports = Story;