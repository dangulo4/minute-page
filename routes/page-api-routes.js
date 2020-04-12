var db = require('../models');

// -----PAGE API ROUTES-----
module.exports = function (app) {
  // GET route for getting all of the pages
  app.get('/api/pages', function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.UserId = req.query.user_id;
    }

    db.Post.findAll({
      where: query,
      include: [db.User],
    }).then(function (dbPage) {
      res.json(dbPage);
    });
  });

  // Get route for retrieving a single page
  app.get('/api/pages/:id', function (req, res) {
    db.Page.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User],
    }).then(function (dbPage) {
      res.json(dbPage);
    });
  });

  // POST route for saving a new page
  app.post('/api/pages', function (req, res) {
    db.Page.create(req.body).then(function (dbPage) {
      res.json(dbPage);
    });
  });

  // DELETE route for deleting page
  app.delete('/api/pages/:id', function (req, res) {
    db.Page.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbPage) {
      res.json(dbPage);
    });
  });

  // PUT route for updating pages
  app.put('/api/pages', function (req, res) {
    db.Page.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbPage) {
      res.json(dbPage);
    });
  });
};
