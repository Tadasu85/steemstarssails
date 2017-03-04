/**
 * Steempromoted.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
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

  attributes: {

  }
};

