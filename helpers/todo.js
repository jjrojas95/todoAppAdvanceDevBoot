var exports = {};
var db = require('../models');

// INDEX RUOTE
exports.getAllTodos = function(req,res){
 db.Todo.find({})
   .then(function(allTodos) {res.json(allTodos);})
   .catch(function(err) {res.send(err);}); 
};

// CREATE ROUTE
exports.createTodo = function(req,res){
  db.Todo.create(req.body)
    .then(function(createdTodo){res.status(201).json(createdTodo)})
    .catch(function(err){res.send(err)});
};

// SHOWS ROUTE
exports.getTodo = function(req,res){
  db.Todo.findById(req.params.todoid)
    .then(function(foundTodo){res.json(foundTodo);})
    .catch(function(err){res.send(error)});  
};

// UPDATE ROUTE
exports.uptadeTodo = function(req,res){
  db.Todo.findOneAndUpdate({_id: req.params.todoid} , { $set: req.body }, {new: true})
    .then(function(uptadeTodo){res.json(uptadeTodo);})
    .catch(function(err){res.send(error)});  
};

// DELETE ROUTE
exports.deleteTodo = function(req,res){
  db.Todo.findOneAndRemove({ _id: req.params.todoid })
    .then(function(){ res.json({message: 'we delete it'}) })
    .catch(function(err){res.send(err)});
};
module.exports = exports;