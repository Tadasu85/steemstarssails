//The user model is used to store all information about the user, we also use bcrypt to encypt the password.

var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        },
        growthrate: {
            type: 'float',
            defaultsTo: 0.05
        },
        ideals: {
            collection: 'ideal',
            via: 'userid',
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    },

    afterCreate: function(user, cb) {

        var digPlanet = Planet.find();

        digPlanet.where({'name':user.username}).exec(function afterwards(err, planet){
            
            if (err) {
                    sails.log(err);
                    cb(err);
                }
            Ideal.create({'location':planet[0].id, 'userid':user.id, 'amount':1.00}).exec(function afterwards(err, ideal){
                if (err) {
                    sails.log(err);
                    cb(err);
                    } else {
                    sails.log(ideal);
                    cb();
                    }
            })

        })
    }
};