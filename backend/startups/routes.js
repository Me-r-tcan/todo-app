const express = require("express");
const cors = require("cors");
require('express-async-errors');

const errorMiddleware = require("../middlewares/errorMiddleware");
const todos = require("../routes/todos");

module.exports = function (app) {
  app.use(express.json({ limit: "10mb" }));
  app.use(
    express.urlencoded({
      limit: "10mb",
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.use(cors());


  app.use("/api/todos", todos);
  app.use(errorMiddleware);
};