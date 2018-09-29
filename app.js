var express = require("express");
var rpio = require ("rpio");

var app = express();

//app.use(express.static("public"));

var switchState = 0;
app.get("/status", function(req, res) {
    res.send((switchState == 0) ? "Off" : "On");
});

app.get("/on", function(req, res) {
    switchState = 1;
    res.send("On");
});

app.get("/off", function(req, res) {
    switchState = 0;
    res.send("Off");
});

app.post("/on", function(req, res) {
    rpio.write(12, rpio.HIGH);
    res.send({"message":"set to high"});
});

app.post("/off", function(req, res) {
    rpio.write(12, rpio.LOW);
    res.send({"message":"set to low"});
});

app.use(function(req, res) {
    res.status(401).send("Resource not found");
});

app.listen(3030, function() {
    console.log("I am listening on port 3030");
});