//This service handles the heartbeat of the game, and instantiates that process on startup.

var heartbeats = require('heartbeats');

var heart = heartbeats.createHeart(5000);

module.exports = {

	init: function() {

		heart.createEvent(5, function(count, last){
		  
		  sails.log("I Ticked");
      Game.findOrCreate({'id':'58dc05bdd6c3d89b075f9cc9'}).exec(function gameinst(err, gameinst){
        console.log(gameinst);
        if (gameinst.age == undefined) {
          
          Game.update({'id':'58dc05bdd6c3d89b075f9cc9'}, {age: 0}).exec(function gameinst(err, updated){

          if (err) {
      
            return err;
            sails.log(err);

          } 

          Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
            
      
          });
        });
          
        }
        sails.log(err, gameinst.age);
        
        var currentage = gameinst.age;
          Game.update({'id':'58dc05bdd6c3d89b075f9cc9'}, {age: currentage + 1}).exec(function gameinst(err, updated){

          if (err) {
      
            return err;
            sails.log(err);

          } 

          Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
          });
        
          });
      });     
      
      Ideal.find({'userid':{ '!' : [''] }}).exec(function idealinst(err, idealinst){
        console.log(err, idealinst);
      });

      //Increment all ideals each tick.

      // var idealInc = Ideal.find();
      
      // idealInc.where({});

      // idealInc.exec(function callBack(err,results){
      //   console.log(err, results);
      //   results.forEach(function(element) {
      //     User.find({id: element.userid}).exec(function afterwards(err, userforIdeal){
      //       if (err) {
      //         sails.log(err);
      //       }
      //       console.log(userforIdeal);
      //      var evaluatedIdeal = element.amount + element.amount * userforIdeal.growthrate;

      //       //sails.log(evaluatedIdeal);

      //       Ideal.update({'id': element.id}, {amount: Math.round(evaluatedIdeal * 100) / 100}).exec(function afterwards(err, updated){
      //         //sails.log(updated);
      //       if (err) {
      
      //       return err;
      //       sails.log(err);

      //     }

      //         Ideal.publishUpdate(element.id , {
      //         'amount': element.amount
      //         });
      //       });
      //     });
      //   });
      // });
    });
	}
};

