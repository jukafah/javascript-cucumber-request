const { defineSupportCode }     = require('cucumber');

defineSupportCode(function({ After, Before }) {

    Before(function(scenario) {
        // actions that occur before a test
    });


    After(function(scenario) {
        // actions that occur after a test
    });

});