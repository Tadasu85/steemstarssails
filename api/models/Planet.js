/**
 * Planet.js
 *
 * @description :: A planet in this context contains data about the point, x and y coords as well as a number 
 * of other needed pieces of information.
 */

module.exports = {

  attributes: {
    //The name is both the name of the planet and the name of the accoun that is being referenced in steem.
    name: {type: 'string', unique: true, required: true},
    //the cartesian coords of the planet on the graph this is a json object composed of 2 floats an X and a Y
    cartesian_coordinates: {type: 'json', unique: true, required: true},
    //A collection of all players that have inhabitants on the planet.
    inhabitants: {
      collection: 'ideal',
      via: 'location',
      },
    
    // Add a reference to Game
    owner: {
      model: 'game',
      required: true
    }
  }
};