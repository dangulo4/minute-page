// *********************************************************************************
// HTML-routes.js - this file sets routes for sending users to the app's internal HTML pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');

// Routes
// =============================================================
// Each of the routes determines which HTML page the user is sent to.
module.exports = function (app) {
  // login route loads index.html
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // user route loads mainscreen.html
  //==This page is where users can see their landing pages, and there is a button to start making a new one==
  app.get('/user', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/mainscreen.html'));
  });

  // questions route loads questions.html
  app.get('/questions', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/questions.html'));
  });

  // processing route loads existingpages.html
  app.get('/gallery', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/existingpages.html'));
  });

  // processing route loads existingpages.html
  app.get('/leads', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/leads.html'));
  });

  // // output route loads output.html
  // app.get("/output", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/output.html"));
  // });

  // logout route loads logout.html
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/logout.html'));
  });
};
