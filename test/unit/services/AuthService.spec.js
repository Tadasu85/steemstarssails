/* global PostService */

// Here is were we init our 'sails' environment and application
require('../../bootstrap');

// Here we have our tests
describe('The AuthService', function () {

before(function (done) {
   User.create({'id': '0'})
    .then(function () {
           done();
         });
  });

});
