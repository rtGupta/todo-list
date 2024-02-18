const express = require('express');
const todoController = require('./../controllers/todos-controller');

const router = express.Router();

router.route('/todos')
        .post(todoController.post)
        .get(todoController.index);

router.route('/todos/:id')
        .get(todoController.get)
        .put(todoController.update)
        .delete(todoController.remove)

module.exports = router;