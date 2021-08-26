const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define schema
const tableSchema = new Schema({
    meta: {
        name: {
            type: String,
            require: true,
        },
        
        title:  {
            type: String,
            require: true,
        },

        tableName:  {
            type: String,
            require: true,
        },

    },
    tableHead : {
        type: Object,
        require: true,
    },
    tableBody : {
        type: Object,
        require: true,
    },
    modal : {
        type: Object,
        required: true,
    }


});



//define model
module.exports = mongoose.model("Table", tableSchema);