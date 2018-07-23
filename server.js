//Require essential packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Set up the server to listen on port 3000
var app = express();
var PORT = process.env.PORT || 3000;

//set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

//Create the HTML routes
app.get('/', function (req, res) {
    res.sendFile('home.html', { root: __dirname + "/public" } );
    
  });

  app.get('/survey', function (req, res) {
    res.sendFile('survey.html', { root: __dirname + "/public" } );
    
  });

  app.get('/api/friends', function (req, res) {
    res.sendFile('friends.js', { root: __dirname + "/app/data" } );
    
  })


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  module.export = app;
  
  
