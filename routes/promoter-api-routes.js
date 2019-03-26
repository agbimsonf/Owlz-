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
  // GET route for getting all of the Promoter
  app.get("/", function(req, res) {
      db.Promoter.findAll({}).then(function(dbPromoter) {
        res.render("indexPromoter", { clients: dbPromoter });
      });
    }); 

  // Get route for retrieving a single Promoter
  app.get("/api/clients/:id", function(req, res) {
    db.Promoter.findOne({
      where:{
        id: req.params.id
      }
    }).then(function(dbPromoter){
      res.render('indexPromoter',{ client: dbPromoter });
    })
  });
     
  // Post route for Create the Promoter
  app.post("/api/clients", function(req, res) {
    db.Promoter.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      email: req.body.email
    },{
      where:{
        id: req.body.id
      }
    }).then(function(dbPromoter){
      res.json(dbPromoter)
    })
  });

  // PUT route for updating Promoter
  app.put("/api/clients/", function(req, res) {
    db.Promoter.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      email: req.body.email
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbPromoter) {
        res.json(dbPromoter);
      });

  });
};

