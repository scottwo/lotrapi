var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./Server/mongoose');
var app = express();

app.use(bodyParser());
app.use(express.static('public'));
require('./Server/server.routes.js')(app);
mongoose.db();

app.listen('3000', function(){
    console.log('Server running on port 3000')
});

module.exports = app;