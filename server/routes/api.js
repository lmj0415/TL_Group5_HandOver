const express = require("express");
const router = express.Router();


router.get('/', (req, res) => res.send('API is working propperly'))


module.exports = router