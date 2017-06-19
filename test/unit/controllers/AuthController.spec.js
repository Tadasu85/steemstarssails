// Here is were we init our 'sails' environment and application

var supertest = require('supertest');

require('../../bootstrap');

describe('The AuthController', function () {

var authenticatedUser = 0;

it('should authenticate a user and return the users data.', function (done) {
   var agent = supertest.agent(sails.hooks.http.app);
   agent
     .post('/login')
     .set('Accept', 'application/json')
     .send({"username": "john", "password": "ticktock"})
     
     .expect(200)
     .expect('{\n  "message": "Missing credentials",\n  "user": false\n}')
     .end(function (err, result) {
       if (err) {
         done(err);
       } else {
         console.log("Success on fail test@!");
         done();
       }
     });
});

/*it('should get posts with comments', function (done) {
   var agent = supertest.agent(sails.hooks.http.app);
   agent
     .get('/post/getPostsWithComments')
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(200)
     .end(function (err, result) {
       if (err) {
         done(err);
       } else {
         result.body.should.be.an('array');
         result.body.should.have.length(1);
         done();
       }
     });
});*/

});