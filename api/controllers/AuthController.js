/**
 * AuthController
 *
 * @description :: This controller handles our login and authentication actions login, logout and auth for restauth.
 * keep actions, shortcuts and rest disabled here for the time being for safety.
 */

var passport = require('passport');

module.exports = {

    //set configs for this controller.

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {

        //using passports local lib we define our login and auth actions.

        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.redirect('/permission/profile');
                
            });

        })(req, res);
    },

    //logout actions return to homepage.

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};
