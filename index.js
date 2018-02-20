var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port =  process.env.PORT || 3000;

var todoRoutes = require('./routes/todo');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/api/todos',todoRoutes);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.get('/',function(req,res){
  res.sendFile('index.html');
});



app.listen(port,function(){
  console.log('Listen on the port ' + port);
});