const express = require("express");
const app = express();

require("./startups/routes")(app);

module.exports = app;