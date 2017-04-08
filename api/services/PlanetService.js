/**
* PlanetService
*
* @description :: Service that handles x and y assignment on planets.
*/


module.exports = {
   
    PlacePlanets: function (err, done) { 
    Planet.find().exec(function(err, Planet) {
    
    for (var i=0; i<Planet.length; i++) {
        Planet[i];
        if (!Planet[i].x_coord & !Planet[i].y_coord) {
            
            var fragx = 10 + [i] + 10;
            var fragy = 10 + [i] + 10;
            
            Planet[i].x_coord = fragx;
            Planet[i].y_coord = fragy;
            }
        }
    });
    if (err) { return done(err); }
      // Otherwise, it worked!
      return done();
    }
};