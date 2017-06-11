/**
* SteemService
*
* @description :: TODO: Service that watches account creation on steem as well as follows/unfollows, this information will
* then be packed into the DB.
*/
var steem = require('steem');

module.exports = {

  init: function() {

  steem.api.streamTransactionsAsync(function(err, t) {
  	if(err) {
  		return err;
  	};
  	if(t.operations[0][0] == "custom_json" && t.operations[0][1].json[2] == 'f') {
      var currenOperation = JSON.parse(t.operations[0][1].json);
  		sails.log(currenOperation[1].follower + " to: " + currenOperation[1].following + " through: " + currenOperation[1].what );
      if(currenOperation[1].what == "blog") {
        Edge.create({'from':currenOperation[1].follower, 'to':currenOperation[1].following, 'owner':"58dc05bdd6c3d89b075f9cc9"}).exec(function afterwards(err, edge){
          if (err) {
                    sails.log(err);
                    } else {
                    sails.log(edge);
                    
                    };
        });
        }else{
          //TODO: HANDLE UNFOLLOW WITH DELETE EDGE IF IT EXISTS
        }
  	};
  	if(t.operations[0][0] == "account_create_with_delegation") {
  		//sails.log(t.operations[0])
  	};
    
  });

}

};
