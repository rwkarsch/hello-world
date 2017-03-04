var Alexa = require("alexa-sdk");


exports.sayHello: function () {
        this.emit(':tell', 'Hello Harrison, how are you today? Are you ready for your gig?');
    }