/**
* SteemService
*
* @description :: TODO: Service that watches account creation on steem as well as follows/unfollows, this information will
* then be packed into the DB.
*/
var steem = require('steem');

var asyncLoop = require('node-async-loop');

var _ = require('underscore');



module.exports = {

  init: function(options, done) {

  var N = 0;
  var array = _.range(1092, 1500);

  sails.log("Hello its me SteemService!");

  steem.api.getDynamicGlobalProperties(function(err, result) {
    if(err){
        return done(err);
      }
       sails.log("Got last locked block: ", result.last_irreversible_block_num);

      N = result.last_irreversible_block_num;
  });

  asyncLoop(array, function(item, next) {
    steem.api.getBlock(item, function (err, result) {
      if(err){
        return done(err);
      }
      sails.log(item, result);
    });
    next();
  }, function ()
  {
    sails.log('Finished!');
    return;

  });

}

};
