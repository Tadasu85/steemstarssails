//This service handles the heartbeat of the game, and instantiates that process on startup.

var heartbeats = require('heartbeats');
var steem = require('steem');
var heart = heartbeats.createHeart(1000);

module.exports = {

	init: function() {

		heart.createEvent(30, function(count, last){

      var globalheartage = heart.age;

      Planet.find()
      .populate('inhabitants')
      .exec(function (err, population){
      population[0].planet;
      });
    

      Game.update({'id':'58dc05bdd6c3d89b075f9cc9'},{age: globalheartage}).exec(function afterwards(err, updated){

        if (err) {
      
        return err;
        sails.log(err);

        } 
      });

      Game.publishUpdate('58dc05bdd6c3d89b075f9cc9', {
      age: globalheartage
      });

      steem.api.getState("", function(err, state) {
      sails.log(err, state.props.head_block_number);
      if (err) {
      
        return err;

        }
      steem.api.getBlock(state.props.head_block_number, function(err, block) {
      sails.log(err, block.transactions.length, state.props.head_block_number);
      });
      });

    });

	}

}