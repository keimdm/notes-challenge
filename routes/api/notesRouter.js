const express = require("express");
const notesRouter = express.Router();
const path = require('path');

notesRouter.use(express.urlencoded({ extended: true }));
notesRouter.use(express.json());
notesRouter.use(express.static('public'));

notesRouter.get("/api/notes", (req, res) => {
    console.log("notes get");
    res.json(`${req.method} request received to get reviews`);
    console.info(`${req.method} request received to get reviews`);
});

notesRouter.post("/api/notes", (req, res) => {
    console.log("notes post");
    res.json(`${req.method} request received to get reviews`);
    console.info(`${req.method} request received to get reviews`);
});

module.exports = notesRouter;