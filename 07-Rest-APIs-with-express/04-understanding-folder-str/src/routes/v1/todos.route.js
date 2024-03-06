const express = require('express');
const todoController = require('../../controllers/todo.controller');

const todoRouter = express.Router(); // express router object

todoRouter.get("/",todoController);

module.exports = todoRouter;