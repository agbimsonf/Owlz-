// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
//  =============================================================
module.exports = function(app) {
  // Get route for retrieving a single Promoter
  app.get("/api/promoters/:id", function(req, res) {
    db.Promoter.findOne({
      where:{
        id: req.params.id
      }
    }).then(function(dbPromoter){
      db.Lead.findAll({
        where:{
           PromoterId: req.params.id 
        }
    }).then(function(dbLead) {
        res.render('indexPromoter',{ promoter: dbPromoter , leads: dbLead});
     });
    })
  });
     
  // Post route for Create the Promoter
  app.post("/api/promoters", function(req, res) {
    db.Promoter.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      handle:req.body.handle,
      descriptions:req.body.about,
      city:req.body.city,
      languages:req.body.language,
      phone_number: req.body.phone_number,
      email: req.body.email,
      instagram:req.body.instagram
  },{
      where:{
        id: req.body.id
      }
    }).then(function(dbPromoter){
      res.json(dbPromoter)
    })
  });

  // PUT route for updating Promoter
  app.put("/api/promoters/", function(req, res) {
    db.Promoter.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      handle:req.body.handle,
      descriptions:req.body.about,
      city:req.body.city,
      languages:req.body.language,
      phone_number: req.body.phone_number,
      email: req.body.email,
      instagram:req.body.instagram
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

