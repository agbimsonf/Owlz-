// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });
  app.get("/listpromoter", function(req, res) {
    res.render(path.join(__dirname, "../views/listPromoter.handlebars"));
  });
  app.get("/registerclient", function(req, res) {
    res.render(path.join(__dirname, "../views/registrationClient.handlebars"));
  });
  app.get("/indexClient", function(req, res) {
    res.render(path.join(__dirname, "../views/updateClient.handlebars"));
  });
  app.get("/registerpromoter", function(req, res) {
    res.render(path.join(__dirname, "../views/registrationPromoter.handlebars"));
  });
  app.get("/promoters/", function(req, res) {
    res.render(path.join(__dirname, "../views/indexPromoter.handlebars"));
  });
  app.get("/login", function(req, res) {
    res.render(path.join(__dirname, "../views/loginPromoter.handlebars"));
  });
  app.get("/about", function(req, res) {
    res.render(path.join(__dirname, "../views/about.handlebars"));
  });
  app.get("/contact", function(req, res) {
    res.render(path.join(__dirname, "../views/contact.handlebars"));
  });
};
