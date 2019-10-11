var express = require("express");

// Initialize Express
var app = express();

// Main Route
app.get('/', function(req, res) {
  res.sendFile('views/index.html', {root: __dirname })
});
/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});