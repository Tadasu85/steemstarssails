/**
 * Edge.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 attributes: {
    point_a: 'string',
    point_b: 'string',
    length: 'some crazy calc based on the location of each point.',
    
    // Add a reference to User
    owner: {
      model: 'game'
    }
  }
};

