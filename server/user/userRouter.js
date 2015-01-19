var user = require('./userController.js');

module.exports = function(app){

  app.get('/', user.loadHome);
  app.post('/', user.findASpot);

};