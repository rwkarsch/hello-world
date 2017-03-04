'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    
    'BobWorldIntent': function () {
        this.emit('SayHello')
    },
    
    'FeelingIntent': function () {
        this.emit('Feeling')
    },   

    'IntroIntent': function () {
        this.emit('Intro')
    },   
    
    'SayHello': function () {
        this.emit(':tell', 'Hello Ben Rodd, how are you today? Are you ready for your gig?');
    },
    
    'Feeling': function () {
        this.emit(':tell', 'I feel GREAT! How about you?');
    },
    
    'Intro': function () {
        

        console.log('I am in the intro intent')
        this.emit(':tell', 'Gladly! <audio src="https://s3.amazonaws.com/rwkarschbucket/Tequila_10_Seconds.mp3" /> Gladly! Ladies and Gentlemen, Boys and Girls - you attention please!!! Introducing, the one, the only: Ben Rodd');
    }
};