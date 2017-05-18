/**
 * Ship.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 */

module.exports = {

  
  attributes: {
    name: 'string',
    type: 'string', //TODO:Enum for ship types.
    location: 'string', //TODO: ref for planet it is located on. if it is docked.
    x_coord: 'float',
    y_coord: 'float',
    
    // Add a reference to Game
    owner: {
      model: 'game'
    }
  }
};

