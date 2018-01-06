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
//console.log(Ideal);
//Increment all ideals each tick.
      Ideal.find().exec(function callBack(err,results){
        //console.log(err, results);
      });
    });
	}
};