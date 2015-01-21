var spots = require('./spotsController.js');

module.exports = function(app){
  console.log(app,'in the spots router');
  app.get('/spots', spots.getAllSpots);
  //app.post('/spots', spots.addSpot);

};