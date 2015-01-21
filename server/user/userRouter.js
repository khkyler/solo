var user = require('./userController.js');

module.exports = function(app){
  console.log(app, 'in the user route');
  app.get('/', user.loadHome);
  //app.post('/', user.findASpot);

};