//This service handles the heartbeat of the game, and instantiates that process on startup.

var heartbeats = require('heartbeats');
var heart = heartbeats.createHeart(1000);

module.exports = {
//this is likely not even needed considering we are publishing updates to all sockets on the change.
	init: function() {
		heart.createEvent(5, function(count, last){
      var globalheartage = heart.age;
      Game.update({'id':'58dc05bdd6c3d89b075f9cc9'},{age: globalheartage}).exec(function afterwards(err, updated){

        if (err) {
      // handle error here- e.g. `res.serverError(err);`
        return;
        } 

      
                  });

      Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
      age: globalheartage
      });
  
  
                    });
	 }  
}