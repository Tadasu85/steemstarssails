/**
 * SteemController
 *
 * @description :: Server-side logic for managing steems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var steem = require('steem');

steem.api.getState('/promoted', function(err, result) {
  if (err){
    return (err);
  }
  else
  return (result);
});


module.exports = {
	
};

