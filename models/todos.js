var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: { type: String, require: 'No puede estar en blanco este campo'},
  completed: { type: Boolean, default: false},
  created_date: {type: Date, default: Date.now()}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;