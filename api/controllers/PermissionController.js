/**
 * PermissionController
 *
 * @description :: This controller is an extension of the authcontroller, 
 * this verifies that a user is logged in when attempting to hit pages that are required to be logged in.
 */

module.exports = {

//index and profile handlers handle one page and two routes through which it can be hit.

index: function(req, res) {
   if (req.isAuthenticated()) {
        return res;
    }
    else{
        return res.redirect('/');
    }(req, res);
},

profile: function(req, res) {
   if (req.isAuthenticated()) {
        return res;
    }
    else{
        return res.redirect('/');
    }(req, res);
},

//galaxy handles the game view

galaxy: function(req, res) {
   if (req.isAuthenticated()) {
        return res;
    }
    else{
        return res.redirect('/');
    }(req, res);
},

//testing page filled with assorted model post actions. will be removed when ready for production.

testing: function(req, res) {
   if (req.isAuthenticated()) {
        return res;
    }
    else{
        return res.redirect('/');
    }(req, res);
},

}