//This service handles the heartbeat of the game, and instantiates that process on startup.

var heartbeats = require('heartbeats');
var steem = require('steem');
var heart = heartbeats.createHeart(1000);

module.exports = {

	init: function() {

		heart.createEvent(5, function(count, last){

      

      Game.find({'id':'58dc05bdd6c3d89b075f9cc9'}).exec(function afterwards(err, gameinst){
        //sails.log(err, gameinst[0].age);
        
        var currentage = gameinst[0].age;
          Game.update({'id':'58dc05bdd6c3d89b075f9cc9'}, {age: currentage + 1}).exec(function afterwards(err, updated){

          if (err) {
      
            return err;
            sails.log(err);

          } 

          Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
            
      
          });
        
          });
      });     

      //Increment all populations each tick.

      var popInc = Population.find();

      popInc.where({});

      popInc.exec(function callBack(err,results){
        results.forEach(function(element) {
          User.find({id: element.userid}).exec(function afterwards(err, userforPop){
            if (err) {
              sails.log(err);
            }
            
            var evaluatedPop = element.amount + element.amount * userforPop[0].growthrate;

            //sails.log(evaluatedPop);

            Population.update({'id': element.id}, {amount: Math.round(evaluatedPop * 100) / 100}).exec(function afterwards(err, updated){
              //sails.log(updated);
            if (err) {
      
            return err;
            sails.log(err);

          } 

          Population.publishUpdate(element.id , {
            'amount': element.amount
          });
              
            });
          
        
          });
        });
      });

    });

	}

}

