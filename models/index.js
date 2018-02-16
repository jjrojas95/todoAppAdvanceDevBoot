var mongoose = require('mongoose');

mongoose.set('debug',true);

mongoose.connect('mongodb://localhost/todoAppV1');
mongoose.Promise = Promise;

module.exports.Todo = require('./todos');