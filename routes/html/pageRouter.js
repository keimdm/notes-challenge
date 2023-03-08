const express = require("express");
const pageRouter = express.Router();
const path = require('path');

pageRouter.use(express.urlencoded({ extended: true }));
pageRouter.use(express.json());
pageRouter.use(express.static('public'));

pageRouter.get('/notes', (req, res) => {
    console.log("pagerouter get notes");
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

pageRouter.get('/', (req, res) => {
    console.log("pagerouter get *")
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = pageRouter;