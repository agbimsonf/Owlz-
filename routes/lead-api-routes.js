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
  // Post route for Create leads
    app.post("/api/leads", function(req, res) {
        db.Lead.create({
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            guests: req.body.guests,
            occasion: req.body.occasion,
            message: req.body.message,
            email_client: req.body.email_client,
            PromoterId: req.body.PromoterId
        }).then(function(dblead){
            res.json(dblead)
        })
    });
};
