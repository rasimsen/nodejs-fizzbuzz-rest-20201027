"use strict";

const fizzBuzzController = require("./fizzbuzz-controller");

module.exports = function (app) {
  app.route("/fizzbuzz/validation/:number").get(fizzBuzzController.validation);
};
