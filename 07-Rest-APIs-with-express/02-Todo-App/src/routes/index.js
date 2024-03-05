const express = require("express");
const homePingController = require("../controllers/home.controller");

const router = express.Router(); //express router

router.get("/home", homePingController);
router.get("/homeComing", homePingController);

module.exports = router;
