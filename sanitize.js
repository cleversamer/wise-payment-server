const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

// The following configuration will limit the number of requests
// for each IP address per a certain amount of time.
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // 2 requests per minute
  message:
    "<b style='font-size: 1.2rem; color: #f00'>You're blocked for an amount of time.</b>",
});

module.exports = (app) => {
  app.use(limiter);
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(xss());
};
