var express = require('express'),
    body = require('body-parser'),
    PORT = process.env.PORT | 3030,
    app = express(),
    ejs = require("ejs"),
    path = require('path')


app.use(express.static('./app/public'));
app.use(body.urlencoded({extended: true}));
app.use(body.json());
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, './app/views'))
var routes = require("./app/controllers/friendController")
app.use(routes)


app.listen(PORT, function(){
    console.log("Listening on Port: ", PORT)
})