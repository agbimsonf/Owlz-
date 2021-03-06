// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");

// Sets up the Express App
//  =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Moment JS

MomentHandler.registerHelpers(Handlebars);

// Routes
// =============================================================
require("./routes/list-api-routes.js")(app);
require("./routes/lead-api-routes.js")(app);
require("./routes/client-api-routes.js")(app);
require("./routes/promoter-api-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

