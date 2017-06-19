var Sails = require('sails');
var _ = require('lodash');

global.chai = require('chai');
global.should = chai.should();


var config = require('../config/env/test');

var sails;

"use strict";

before(function (done) {

// Increase the Mocha timeout so that Sails has enough time to lift.
this.timeout(10000);

Sails.lift({
   log: {
     level: 'error'
   },
   hooks: {
     grunt: false
   },
   models: {
     connection: 'unitTestConnection',
     migrate: 'drop'
   },
   connections: {
     unitTestConnection: {
       adapter: 'sails-disk'
     }
   }
}, function (err, server) {
  sails = server;
   if (err) return done(err);
   // here you can load fixtures, etc.
   done(err, sails);
});
});

after(function (done) {
// here you can clear fixtures, etc.
if (sails && _.isFunction(sails.lower)) {
   Sails.lower(done);
}
});
