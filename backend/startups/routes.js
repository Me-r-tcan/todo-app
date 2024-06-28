const express = require("express");

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
  app.use("/api/todos", todos);
};