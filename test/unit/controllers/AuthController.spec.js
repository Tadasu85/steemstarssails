// Here is were we init our 'sails' environment and application

var supertest = require('supertest');

require('../../bootstrap');

describe('The AuthController', function () {

var AuthorisedUserId = 0;

it('verify authority', function (done) {
   var agent = supertest.agent(sails.hooks.http.app);
   agent
     .post('/login')
     .set('Accept', 'application/json')
     .send({"username": "testingdummy", "email": "some@body.com"})
     .expect(302)
     .end(function (err, result) {
       if (err) {
         done(err);
       } else {
         result.body.should.be.an('object');
         
         AuthorisedUserId = result.body.id;
         done();
       }
     });
});

});