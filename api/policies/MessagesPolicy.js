module.exports = function (req, res, next) {
    if (req.user) {
        
        if (req.options.action == "create") {
            req.body.userId = req.user.id;
            req.body.username = req.user.username;
            
        }
        next();
    } else {
        res.send("You Must Be Logged In", 403);
    }
};