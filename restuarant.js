var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Play Data
var tables = [
    {
        routeName: "table1",
        name: "table1",
        seats: 4,
        availability: true
    },
    {
        routeName: "table2",
        name: "table2",
        seats: 2,
        availability: true
    },
    {
        routeName: "table3",
        name: "table3",
        seats: 4,
        availability: true
    },
    {
        routeName: "table1",
        name: "table1",
        seats: 4,
        availability: true
    }
]

var person = [
    {
        routeName: "Mark",
        name: "Mark",
        party: 4,
        phoneNum: 9103184741
    }
]

// Route to our pages Home, Reservations, and Tables
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//Displays all the tables and people making reservations
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/person", function(req, res) {
    return res.json(person);
});

// Creates a new reservation and pushes the person into the waiting list


// Runs the Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });