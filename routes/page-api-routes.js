var db = require("../models");

// -----PAGE API ROUTES-----
module.exports = function(app) {

// GET route for getting all of the pages
app.get("/api/pages", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbPage) {
      res.json(dbPage);
    });
  });

  // Get route for retrieving a single page
  app.get("/api/pages/:id", function(req, res) {
    
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbPage) {
      res.json(dbPage);
    });
  });

  // POST route for saving a new page
  app.post("/api/pages", function(req, res) {
    db.Post.create(req.body).then(function(dbPage) {
      res.json(dbPage);
    });
  });

  // DELETE route for deleting page
  app.delete("/api/pages/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPage) {
      res.json(dbPage);
    });
  });

  // PUT route for updating pages
  app.put("/api/pages", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPage) {
      res.json(dbPage);
    });
  });
    
};