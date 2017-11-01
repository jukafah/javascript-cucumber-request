const service      = require('./service');
const should       = require('should');

const googleService = Object.create(service, {

    get: { value: function(endpoint) {
        service.get.call(this, endpoint);
    }}

});

module.exports = googleService;