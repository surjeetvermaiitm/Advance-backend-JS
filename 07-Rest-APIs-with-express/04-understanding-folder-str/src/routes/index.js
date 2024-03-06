//API router
const express = require('express');
const v1Router=require('./v1');
const v2Router=require('./v2');

const router = express.Router(); // express router object

router.use("/v1",v1Router)
router.use("/v2",v2Router)


module.exports = router;