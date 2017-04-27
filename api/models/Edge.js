/**
 * Edge.js
 *
 * @description :: A model which allows us to communicate relations of planets to each other please note that only one record shall be required per association as this model allows communication of all types.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 attributes: {
    follow_type: {
        type: 'string',
        enum: ['followed', 'following', 'mutual']
    },
    //This follow type is based on an association from point a to point b, however this is of course ignored if noted as mutual.
    
    point_a: 'string',
    
    //This is simply one planet in the game, it does not matter if it is origin or destination to this field.
    
    point_b: 'string',
    
    //Exactly the same as point a simply the secondary point in the association.
    
    length: 'int',
    
   /* Referencing here http://www.mathopenref.com/coorddist.html need to plug this equation in with point a and point b x and y coords being the calc vars
    
    function distance(p, q)
    { var dx   = point_a.x_coord - point_b.x_coord;         
    var dy   = point_a.y_coord - point_b.y_coord;         
    var dist = Math.sqrt( dx*dx + dy*dy ); 
    return dist;
    
    length = dist
    }*/
    
    // Add a reference to Game
    owner: {
      model: 'game'
    }
  }
};

