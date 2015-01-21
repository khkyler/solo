var firebase = require('firebase');
var db = require('../db/db.js');

module.exports = {
  addSpot:  function(req, res){
    var name = req.body.name;
    var stars = req.body.stars;
    console.log('req.body', req.body);
    var id = db.child('restaurants').push(req.body);
    
    console.log('posting', id.key());
    res.send(id.key(), 201);
  },
  getAllSpots: function(req,res){
    db.child('restaurants').once('value', function (data){
      //console.log('the data: ',data.val());
      res.send(data.val());
    });
    // res.send('yay');
  },
  findOneSpot: function(){}

};