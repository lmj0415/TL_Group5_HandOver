const Storie = require("../models/storyModel.js")

const get_index = (req, res) => {
    res.render('index')
}

module.exports = {
    get_index,
}

