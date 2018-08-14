var express = require('express');
var router = express.Router();
var ejs = require("ejs");


var friends = require("../data/friends.js")

router.get("/", function(req, res){
    res.render("home")
})

router.get("/survey", function(req, res) {
    res.render("survey")
    
})

router.get("/api/friends", function(req, res) {
    res.json(friends)
})

router.post("/api/friends", function(req, res){
    
    var newFriend = req.body

    for(var i=0; i <=9; i++){
        newFriend.scores[i] = parseInt(newFriend.scores[i])
    }

    var minimumDifference  = 40;
    var friendIndex;
    for(var i =0; i < friends.length; i++)
    {
        var totalDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
        }

        if (totalDifference < minimumDifference) {
            friendIndex = i;
            minimumDifference = totalDifference;
        }

    }

    friends.push(newFriend)

    res.json(friends[friendIndex])
})



module.exports = router;