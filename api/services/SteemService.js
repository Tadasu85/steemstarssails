/**
* SteemService
*
* @description :: TODO: Service that watches account creation on steem as well as follows/unfollows, this information will
* then be packed into the DB.
*/
var steem = require('steem');

module.exports = {

  init: function(options, done) {

  steem.api.streamTransactionsAsync(function(err, t) {
  	if(err) {
  		return err;
  	};
  	if(t.operations[0][0] == "custom_json") {
  		//sails.log(t.operations[0])
  	};
  	if(t.operations[0][0] == "account_create_with_delegation" && "account_create") {
  		//sails.log(t.operations[0])
  	};
    
  });

}

};
