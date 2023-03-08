const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const htmlRouter = require("./html");

console.log("routes index");

router.use("/api/notes", apiRouter);
router.use("/", htmlRouter);

module.exports = router;