const express = require("express");
const homePingController = require("../controllers/home.controller");

const customRouter = express.Router(); //express router

customRouter.get("/custom1", homePingController);
customRouter.get("/custom2", homePingController);

module.exports = customRouter;
