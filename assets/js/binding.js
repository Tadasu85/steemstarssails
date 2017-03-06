var sails = sails || {};

(function (sails) {
  sails.Main = Backbone.Model.extend({
    urlRoot: '/',
  });
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