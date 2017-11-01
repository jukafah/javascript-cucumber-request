const { defineSupportCode }     = require('cucumber');
const service                  = require('../../src/services/service');
const should                    = require('should');

let statusCode;

defineSupportCode(function({Given, When, Then}) {

    Given('a request to {string}', function (endpoint, callback) {
        service.get(endpoint, callback);
    });

    Then('I recieve status code {int}', function (code) {
        service.getResponse().statusCode.should.be.equal(code);
        // statusCode.should.equal(code);
    });

});