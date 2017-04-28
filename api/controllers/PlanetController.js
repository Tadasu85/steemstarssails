/**
 * PlanetController
 *
 * @description :: Server-side logic for managing planets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    getPlanetsinVicinity: function(req, res){
        
       /* if(!req) {
            return(null);
        }
        var toprange_x = _.range(req.x_coord, +100);
        var toprange_y = _.range(req.y_coord, +100);
        var bottomrange_x = _.range(req.x_coord, -100);
        var bottomrange_y = _.range(req.y_coord, -100);
        
        Planet.find({where:{x_coord: {'<=':toprange_x}} & {y_coord: {'<=':toprange_y}}
        & {x_coord: {'>=':bottomrange_x}} & {y_coord: {'>=':bottomrange_x}}}).exec(function (err, localPlanets){
        
        return(err, localPlanets);
            
        });
        return;*/
        
        //I dont think this method will actually work because it looks like lodashs range function needs a determined number rather then one that can float, I may have to define that function or find another library that can serve the purpose.
        
    }
	
};

