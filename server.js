var express = require('express'),
    body = require('body-parser'),
    PORT = process.env.PORT | 3030,
    app = express(),
    ejs = require("ejs")


app.use(express.static("public"));
app.use(body.urlencoded({extended: true}));
app.use(body.json());
app.set("view engine", "ejs")
var routes = require("./controllers/friendController")
app.use(routes)


app.listen(PORT, function(){
    console.log("Listening on Port: ", PORT)
})