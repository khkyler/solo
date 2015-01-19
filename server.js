var express = require('express');

var app = express();

var port = 3000;
require('./server/middleware/middleware.js')(app, express);



app.listen(port);
console.log('Server running on port: ', port);