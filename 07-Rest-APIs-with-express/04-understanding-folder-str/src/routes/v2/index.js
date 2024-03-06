const express = require('express');

const homePingController = require('../../controllers/home.controller');

const router = express.Router(); // express router object

router.get("/ping2",homePingController)// localhost:3000/api/v2/ping2

module.exports = router;