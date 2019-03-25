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
  // GET route for getting all of the Client
  app.get("/", function(req, res) {
      db.Client.findAll({}).then(function(dbClient) {
        res.render("registrationClient", { clients: dbClient });
      });
    }); 

  // Get route for retrieving a single Client
  app.get("/api/clients/:id", function(req, res) {
    db.Client.findOne({
      where:{
        id: req.params.id
      }
    }).then(function(dbClient){
      res.render('indexClient',{ client: dbClient });
    })
  });
     
  // Post route for Create the Client
  app.post("/api/clients", function(req, res) {
    db.Client.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      email: req.body.email
    },{
      where:{
        id: req.body.id
      }
    }).then(function(dbClient){
      res.json(dbClient)
    })
  });

  // PUT route for updating Client
  app.put("/api/clients/", function(req, res) {
    db.Client.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      email: req.body.email
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });

  });
};

