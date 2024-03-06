const express = require('express');
const homePingController = require('../../controllers/home.controller');
const todoRouter=require("../v1/todos.route")

const router = express.Router(); // express router object

router.use("/todos",todoRouter)

router.get("/ping1",homePingController) //// localhost:3000/api/v1/ping1



module.exports = router;