// *********************************************************************************
// HTML-routes.js - this file sets routes for sending users to the app's internal HTML pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
  // Each of the routes determines which HTML page the user is sent to.
  module.exports = function(app) {

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // user route loads user.html  
  //==This page is where users can see their landing pages, and there is a button to start making a new one==
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../user.html"));
  });

  // questions route loads questions.html
  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../questions.html"));
  });

  // processing route loads processing.html
  app.get("/processing", function(req, res) {
    res.sendFile(path.join(__dirname, "../processing.html"));
  });

  // output route loads output.html
  app.get("/output", function(req, res) {
    res.sendFile(path.join(__dirname, "../output.html"));
  });
};
