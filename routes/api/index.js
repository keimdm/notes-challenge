const express = require("express");
const apiRouter = express.Router();
const notesRouter = require("./notesRouter.js");

console.log("api index");

apiRouter.use('/', notesRouter);

module.exports = apiRouter;