// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Message route for saving a new message
  app.post("/api/searchs", function(req, res) {
    db.Message.create(req.body).then(function(dbMessage) {
      res.json(dbMessage);
    });
  });
};