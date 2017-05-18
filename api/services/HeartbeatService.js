//This service handles the heartbeat of the game, and instantiates that process on startup.

var heartbeats = require('heartbeats');
var heart = heartbeats.createHeart(1000);


heart.createEvent(5, function(count, last){
	var globalheartage = heart.age;
Game.update({'id':'58dc05bdd6c3d89b075f9cc9'},{age: globalheartage}).exec(function afterwards(err, updated){

  if (err) {
    // handle error here- e.g. `res.serverError(err);`
    return;
  }

  //console.log('Updated game to have age: ' + updated[0].age + " Or we erred: " + err);
});

Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
    age: globalheartage
  });
  
  //console.log('...Every 5 Beats forever and heart age: ' + globalheartage);
});

module.exports = {
//this is likely not even needed considering we are publishing updates to all sockets on the change.
	ping: function() {
		return globalheartage;
	}
}