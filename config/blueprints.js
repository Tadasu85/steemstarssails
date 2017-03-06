module.exports.blueprints = {
  actions: true,
  rest: true,
  shortcuts: true,
  mirror: true,

  //mirror return's socket event's back to the client they originated from - utterly crucial for testing/learning and DRY'ing up your front end.
  
  autowatch: true

  //autowatch is a flag to the find blueprint indicating to subscribe the client to created events. A good default is true, whilst your learning. (There is also a configuration option to dynamically flag this on or off from the client with Backbone.Sails)
};
