/**
 * Population.js
 *
 * @description :: The population models keeps a record of all population on all planets belonging to users.
  */

module.exports = {

  attributes: {
  	//the planet that the populations is on.
  location: {
      model: 'planet',
    },
    //the user that the population belongs to.
  userid: {
      model: 'user',
    },
    //the amount of population on this planet belonging to this user.
  amount: 'string'
  }
};

