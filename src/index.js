'use strict';
var Alexa = require("alexa-sdk");
var speak - require("responses.js");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(speak.sayHello());
    },
    
    'BobWorldIntent': function () {
        this.emit(speak.sayHello())
    },
    
    'FeelingIntent': function () {
        this.emit('Feeling')
    },   

    'IntroIntent': function () {
        this.emit('Intro')
    },   
    
    // 'SayHello': function () {
    //     this.emit(':tell', 'Hello Harrison, how are you today? Are you ready for your gig?');
    // },
    
    'Feeling': function () {
        this.emit(':tell', 'I feel GREAT! How about you?');
    },
    
    'Intro': function () {
        this.emit(':tell', 'Gladly! <audio src="https://s3.amazonaws.com/rwkarschbucket/Tequila_10_Seconds.mp3" /> Ladies and Gentlemen, Boys and Girls - your attention please!!! Introducing, the one, the only: Ben Rodd');
    }
};