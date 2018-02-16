var express = require('express'),
    router = express.Router(),
    db =  require('../models'),
    helpers = require('../helpers/todo');

router.route('/')
.get(helpers.getAllTodos)
.post(helpers.createTodo);

router.route('/:todoid')
  .get(helpers.getTodo)
  .put(helpers.uptadeTodo)
  .delete(helpers.deleteTodo);

module.exports = router;

