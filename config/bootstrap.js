/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var heartbeats = require('heartbeats');

module.exports.bootstrap = function(cb) {
        
// a heart that beats every 1 second. 
var heart = heartbeats.createHeart(1000);

heart.createEvent(5, function(count, last){
  console.log('...Every 5 Beats forever');
});


cb();

};
