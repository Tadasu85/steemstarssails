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
  	}
    
  	if(t.operations[0][0] == "custom_json" && t.operations[0][1].json[2] == 'f') {
      var currenOperation = JSON.parse(t.operations[0][1].json);
      //sails.log(currenOperation);
  		//sails.log(currenOperation[1].follower + " to: " + currenOperation[1].following + " through: " + currenOperation[1].what );
      if(currenOperation[1].what == "blog") {
        Edge.create({'from':currenOperation[1].follower, 'to':currenOperation[1].following, 
          'owner':"58dc05bdd6c3d89b075f9cc9"}).exec(function afterwards(err, edge){
          if (err) {
                    sails.log(err);
                    } else {
                    //sails.log(edge);
                    
                    }
        });
        }

        if(currenOperation[1].what == ""){
          //TODO: HANDLE UNFOLLOW WITH DELETE EDGE IF IT EXISTS
           Edge.destroy({'from':currenOperation[1].follower, 'to':currenOperation[1].following, 
          'owner':"58dc05bdd6c3d89b075f9cc9"}).exec(function afterwards(err, edge){
          if (err) {
                    sails.log(err);
                    } else {
                    //sails.log("Destroyed: ", edge);
                    
                    }
          });
        }
  	}
  	if(t.operations[0][0] == "account_create_with_delegation") {
  		sails.log("Newly minted account: ",t.operations[0][1].new_account_name);
      Planet.create({'name':t.operations[0][1].new_account_name,'cartesian_coordinates':{'X':Math.random()*100000,'Y':Math.random()*100000},'owner':"58dc05bdd6c3d89b075f9cc9"}).exec(function (err, records) {
        if (err) {
        sails.log(err);
        } else {
        //sails.log("Created: ", records);
                    
        }
      });
  	}
    
  });

}

};
