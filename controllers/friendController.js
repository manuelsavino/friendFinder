var express = require('express');
var router = express.Router();
var ejs = require("ejs");

router.get("/", function(req, res){
    res.render("home")
})


module.exports = router;