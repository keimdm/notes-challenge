const express = require("express");
const apiRouter = express.Router();
const notesRouter = require("./notesRouter.js");

console.log("api index");

apiRouter.use('/api/notes', notesRouter);

module.exports = apiRouter;