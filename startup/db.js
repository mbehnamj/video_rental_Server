const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/masoud")
    .then(() => winston.info("Connected to MongoDB..."));
};
