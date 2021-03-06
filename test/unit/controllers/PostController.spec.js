// Here is were we init our 'sails' environment and application

var supertest = require('supertest');

require('../../bootstrap');

describe('The PostController', function () {

var createdPostId = 0;

it('should create a post', function (done) {
   var agent = supertest.agent(sails.hooks.http.app);
   agent
     .post('/post')
     .set('Accept', 'application/json')
     .send({"title": "a post", "body": "some body"})
     .expect('Content-Type', /json/)
     .expect(201)
     .end(function (err, result) {
       if (err) {
         done(err);
       } else {
         result.body.should.be.an('object');
         result.body.should.have.property('id');
         result.body.should.have.property('title', 'a post');
         result.body.should.have.property('body', 'some body');
         createdPostId = result.body.id;
         done();
       }
     });
});

it('should get posts with comments', function (done) {
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
});

it('should delete post created', function (done) {
   var agent = supertest.agent(sails.hooks.http.app);
   agent
     .delete('/post/' + createdPostId)
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(200)
     .end(function (err, result) {
       if (err) {
         done(err);
         
       } else {
         done(null, result.text);
         
       }
     });
});

});