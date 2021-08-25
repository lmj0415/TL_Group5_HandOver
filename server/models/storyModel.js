const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const storySchema = new Schema({
    author: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    subtitle: {
        type: String,
        require: true,
    },
    story : {
        type: String,
        require: true,
    },
    img : {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    }
}, {timestamps: true,});


//define model
module.exports = mongoose.model("Story", storySchema);