/**
* SteemService
*
* @description :: TODO: Service that handles account creation on steem as well as follows/unfollows, this information will
* then be packed into the DB.
*/
var steem = require('steem');


setTimeout(function(){ 
	sails.log("Hello its me SteemService!"); 

		steem.api.getDynamicGlobalProperties(function(err, global) {

		sails.log("Block Num: " + global.last_irreversible_block_num);
  		sails.log(err, global);

  		steem.api.getBlock(global.last_irreversible_block_num, function(err, result) {

  			console.log(err, result.transaction_ids);

  				result.transaction_ids.forEach(function(element){
  					steem.api.getTransaction(element, function(err, result) {
  					console.log(err, result);
					});
  				});
			});

		});



		//Doing some playing!


}, 5000);

module.exports = {
};


steem.api.setSubscribeCallback(callback, clearFilter, function(err, result) {
	function callback(data){
		console.log(data);
	}
  console.log(err, result);
});