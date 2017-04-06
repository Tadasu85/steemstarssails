var request = require('supertest'),
    should = require('should');


describe('UserController', function () {

    before(function (done) {
        done(null, sails);
    });


    it('should get data', function (done) {
        request(sails.hooks.http.app)
            .get('/list/item')
            .send({id: 123, someOtherParam: "something"})
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });
    });
});

