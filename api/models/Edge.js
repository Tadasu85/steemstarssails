/**
 * Edge.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 attributes: {
    source: 'string',
    destination: 'string',
    
    // Add a reference to User
    owner: {
      model: 'game'
    }
  }
};

