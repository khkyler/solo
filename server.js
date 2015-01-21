var express = require('express');
var morgan = require('morgan');
var bodyParser  = require('body-parser');
var spots = require('./server/spots/spotsController.js');

var app = express();

var port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/spots', function (req, res) {
  console.log('GETTING!!!!!!!!!!!!!');
  spots.getAllSpots(req,res);
});
app.post('/spots', function (req, res) {
  console.log('ADDING TO DB', req.body);
  spots.addSpot(req, res);
});



app.listen(port);
console.log('Server running on port: ', port);