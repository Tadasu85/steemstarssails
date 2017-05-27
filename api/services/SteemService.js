/**
* SteemService
*
* @description :: TODO: Service that watches account creation on steem as well as follows/unfollows, this information will
* then be packed into the DB.
*/
var steem = require('steem');

var asyncLoop = require('node-async-loop');

var _ = require('underscore');

var array = [];

steem.api.getDynamicGlobalProperties(function(err, result) {
  	console.log(err, result);
  	var N = 100;
  	array = _.range(1092, N + 1092);
  	
  	
  	console.log(array);
  	
	});

setTimeout(function(){
	sails.log("Hello its me SteemService!"); 

	asyncLoop(array, function(item, next)
	{
    steem.api.getBlock(item, function (err, result) {
    	if(err){
    		console.log(err);
    	}
    	console.log(item);
    });
    next();
	}, function ()
	{
    console.log('Finished!');
	});


}, 5000);

module.exports = {

};
