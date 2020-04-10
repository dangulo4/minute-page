var db = require("../models");

// -----USER API ROUTES-----
module.exports = function(app) {
    // DISPLAY ALL USERS
    app.get("/api/Users", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.User.findAll({
        include: [db.Post]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });

    // DISPLAY SPECIFIC USER
    app.get("/api/users/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.User.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Post]
        }).then(function(dbUser) {
          res.json(dbUser);
        });
    });
 
    // ADD A USER
    app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
          res.json(dbUser);
        });
    });
    
    // DELETE A USER
    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbUser) {
          res.json(dbUser);
        });
    });

    // DELETE ALL USERS
    app.delete("/api/Users", function(req, res) {
        db.User.findAll({
          include: [db.Post]
        }).then(function(dbUser) {
          res.json(dbUser);
        });
    });
};