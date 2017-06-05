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

  steem.api.streamTransactionsAsync(function(err, t) {
    sails.log(err, t);
  });

}

};
