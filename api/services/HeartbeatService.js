//This service handles the heartbeat of the game, and instantiates that process on startup.

var heartbeats = require('heartbeats');
var heart = heartbeats.createHeart(1000);

module.exports = {

	init: function() {

		heart.createEvent(5, function(count, last){

      var globalheartage = heart.age;

      Game.update({'id':'58dc05bdd6c3d89b075f9cc9'},{age: globalheartage}).exec(function afterwards(err, updated){

        if (err) {
      
        return err;

        } 
      });

      Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
      age: globalheartage
      });

    });

	}

}