var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port =  process.env.PORT || 3000;

var todoRoutes = require('./routes/todo');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/api/todos',todoRoutes);

app.get('/',function(req,res){
  res.send('THIS IS THE / ROUTE');
});



app.listen(port,function(){
  console.log('Listen on the port ' + port);
});