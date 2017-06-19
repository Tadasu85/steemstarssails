
/** 
 * Test model: UserController.test.js
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @sails docs  :: http://sailsjs.org/documentation/concepts/testing - 
 * @chai docs	:: http://chaijs.com/guide/styles/
 */
"use strict";

require('../../bootstrap');

var chai = require('chai');
var assert = chai.assert;
var supertest = require('supertest');

describe('Model:User', () => { 

	describe('create()', () => {
		it('should create a record', done => {
			var agent = supertest.agent(sails.hooks.http.app);
			agent
			.post('/user')
			.send({'username':"john",'password':"ticktock",'email':"john@ticktock.com"})
			.end(function (err, result) {
				if(err){
					console.log(err);
					done(err);
				}
			console.log("Success on model create user!");
			console.log(result);
			});
			
			done();
		});
	});

	describe('update()', () => {
		it('should update a record', done => {
			done();
		});
	});

	describe('destroy()', () => {
		it('should destroy a record', done => {
			done();
		});
	});

	describe('find()', () =>{
		it('should return a record', done => {
			done();
		});
	});
});

