var sails = sails || {};

(function (sails) {
  sails.User = Backbone.Model.extend({
    urlRoot: '/user',
  });
  sails.Messages = Backbone.Model.extend({
    urlRoot: '/messages',
  });
  sails.Game = Backbone.Model.extend({
    urlRoot: '/game',
  });

 
})(io.sails);