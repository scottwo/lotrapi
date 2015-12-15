var db = require('./mongoose.js');
var mongoose = require('mongoose');

module.exports = function(app) {
    app.route('/api/data')
    .get(function(req, res){
        db.getData(req.body);
    });
}