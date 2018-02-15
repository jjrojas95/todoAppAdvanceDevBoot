var express = require('express'),
    app = express(),
    port =  process.env.PORT || 3000;

app.get('/',function(req,res){
  res.send('THIS IS THE / ROUTE');
});



app.listen(port,function(){
  console.log('Listen on the port ' + port);
});