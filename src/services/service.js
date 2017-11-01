const request = require('request');

let response;
let body;

function Service() {}

Service.prototype.get = function(endpoint, callback) {
    request.get(endpoint, function(error, res, bdy) {
        response = res;
        body = bdy;
        callback();
    });
};

Service.prototype.getResponse = function() {
    return response;
};

module.exports = new Service();