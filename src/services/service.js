const request   = require('request');
const response  = require('../models/response');

function Service() {}

Service.prototype.get = function(endpoint, callback) {
    request.get(endpoint, function(error, res) {
        response.statusCode = res.statusCode;
        response.body = res.body;
        callback();
    });
};


module.exports = new Service();