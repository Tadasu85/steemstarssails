/**
 * Planet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {type: 'string', unique: true},
    x_coord: 'float',
    y_coord: 'float',
    inhabitants: {
      model: 'population',
      via: 'location',
      
    },
    
    // Add a reference to Game
    owner: {
      model: 'game',
      defaultsTo: '58dc05bdd6c3d89b075f9cc9'
    }
  }
};