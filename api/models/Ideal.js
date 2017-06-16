/**
 * Ideal.js
 *
 * @description :: The ideal models keeps a record of all ideals on all planets belonging to users.
  */

module.exports = {

  attributes: {
  	//the planet that the ideals are on.
  location: {
      model: 'planet',
    },
    //the user that the ideals belong to.
  userid: {
      model: 'user',
    },
    //the amount of ideals on this planet belonging to this user.
  amount: 'float'
  }
};

