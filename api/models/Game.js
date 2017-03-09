/**
 * Game.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  name: 'string',
    
  
  planets: {
            collection: 'planet',
            via: 'owner'
        },
  edges: {
            collection: 'edge',
            via: 'owner'
        },
  ships: {
            collection: 'ship',
            via: 'owner'
        },
  }
  
  
};

