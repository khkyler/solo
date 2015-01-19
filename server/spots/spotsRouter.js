var spots = require('./spotsController.js');

module.exports = function(app){

  app.get('/spots', spots.getAllSpots);
  app.post('/spots', spots.addSpot);

};