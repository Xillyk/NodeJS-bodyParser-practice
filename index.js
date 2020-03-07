var express = require('express'),
app = express(),bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 

app.get('/', function(req, res){ 
    res.send({msg : 'Hello world'})
}); 

app.post('/add', bodyParser.json(), function(req, res){
    var result = parseInt(req.body.a) + parseInt(req.body.b);
    res.send({Result : result});
});
app.listen(8000);