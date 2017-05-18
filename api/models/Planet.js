/**
 * Planet.js
 *
 * @description :: A planet in this context contains data about the point, x and y coords as well as a number 
 * of other needed pieces of information.
 */

module.exports = {

  attributes: {
    //The name is both the name of the planet and the name of the accoun that is being referenced in steem.
    name: {type: 'string', unique: true},
    x_coord: 'float',
    y_coord: 'float',
    //A collection of all players that have inhabitants on the planet.
    inhabitants: {
      collection: 'population',
      via: 'location',
      },
    
    // Add a reference to Game
    owner: {
      model: 'game',
    }
  }
};