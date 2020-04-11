var db = require("../models");

// -----USER API ROUTES-----
module.exports = function(app) {
    // DISPLAY ALL USERS
    app.get("/api/users", function(req, res) {
      db.User.findAll({
        include: [db.Page]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });

    // DISPLAY SPECIFIC USER
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Page]
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

    // // DELETE ALL USERS
    // app.delete("/api/Users", function(req, res) {
    //     db.User.destroy({
    //       include: [db.User]
    //     }).then(function(dbUser) {
    //       res.json(dbUser);
    //     });
    // });
};