

module.exports = function (app, express) {

  var spotsRoutes = express.Router();

  app.use('/spots', spotsRoutes);




  require('../spots/spotsRouter.js')(spotsRoutes);
};