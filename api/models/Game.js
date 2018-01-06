/**
 * Game.js
 *
 * @description :: Store information about the currently running game.
 */

module.exports = {

  attributes: {
    //Name of the current game IE Generation One 
  name: 'string',

    //Store the total age of the game in milliseconds. This is only for running time use created timestamp
    //for when it was created.
  laststeemblocksynced:
      {
      type: 'float',
      defaultsTo: 0
      },

  age:
      {
      type: 'float',
      defaultsTo: 0
      },
    
    //A collcation of all planets in the game galaxy.
  
  planets: {
            collection: 'planet',
            via: 'owner'
        },

    //A collection of all connections in the game galaxy.
  edges: {
            collection: 'edge',
            via: 'owner'
        },

    //A collection of all ship currently deployed in the game galaxy, this will not store parked ships.
  ships: {
            collection: 'ship',
            via: 'owner'
        },
  }
  
  
};

