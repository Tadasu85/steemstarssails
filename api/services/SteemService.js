/**
* SteemService
*
* @description :: TODO: Service that handles account creation on steem as well as follows/unfollows, this information will
* then be packed into the DB.
*/
var steem = require('steem');

var asyncLoop = require('node-async-loop');

var array = [];



setTimeout(function(){
	sails.log("Hello its me SteemService!"); 

	steem.api.getDynamicGlobalProperties(function(err, result) {
  	console.log(err, result.last_irreversible_block_num);
  	array = Array(result.last_irreversible_block_num).fill(0);
  	console.log(array);
	});

	asyncLoop(array, function (item, next)
	{
    steem.api.getBlock(item, function (err, result) {
    	console.log(result);
    });
    next();
	}, function ()
	{
    console.log('Finished!');
	});


}, 5000);

module.exports = {

};
