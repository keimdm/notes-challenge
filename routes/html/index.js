const express = require("express");
const htmlRouter = express.Router();
const pageRouter = require("./pageRouter.js");

console.log("html index");

htmlRouter.use('/', pageRouter);

module.exports = htmlRouter;