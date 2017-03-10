//User Model

var UserModel = Backbone.Model.extend({
  url: '/user',
  defaults: {
    username: '',
    email: ''
  }
});

var UserView = Backbone.View.extend({
  el: '#user-view',

  initialize: function() {
    this.listenTo(this.model, 'sync change', this.render);
    this.model.fetch();
    this.render();
  },

  render: function() {
    var html = '<b>Username:</b> ' + this.model.get('username');
    html += ', email: ' + this.model.get('email');
    this.$el.html(html);
    return this;
  }
});

var user = new UserModel();
var userView = new UserView({model: user});

//Game Model

var GameCollection = Backbone.Collection.extend({
  url: '/game',
  defaults: {
    planets: {},
    edges: {},
    ships: {},
    name: '',
    createdAt: '',
    updatedAt: '',
    id: ''
  }
});



var GameView = Backbone.View.extend({
  el: '#game-view',

  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
    this.collection.fetch();
    this.render();
  },

  render: function() {
    var html = '<b>Game Name:</b> ' + this.collection.get('name');
    html += ', planets: ' + this.collection.get('planets');
    html += ', edges ' + this.collection.get('edges');
    html += ', ships: ' + this.collection.get('ships');
    html += ', createdAt: ' + this.collection.get('createdAt');
    html += ', updatedAt: ' + this.collection.get('updatedAt');
    html += ', id: ' + this.collection.get('id');
    this.$el.html(html);
    return this;
  }
});

var game = new GameCollection();
var gameView = new GameView({collection: game});