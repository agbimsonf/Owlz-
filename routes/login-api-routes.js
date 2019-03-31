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
  // Post route for getting all of the Promoter
    app.get("/login", function(req, res) {
        db.Promoter.findAll({
            
        }).then(function(dbPromoter) {
            res.render('loginPromoter',{ promoters: dbPromoter });
         });
    });
};

