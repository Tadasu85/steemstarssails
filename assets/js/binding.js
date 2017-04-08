//User Model

var UserModel = Backbone.Model.extend({
  url: '/user',
  
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

//Game Collection

var GameCollection = Backbone.Collection.extend({
  url: '/game',
  defaults: {
    name: '',
    createdAt: '',
    updatedAt: '',
    id: '',
    planets: {},
    edges: {},
    ships: {}
    
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

//Planet Model

var PlanetCollection = Backbone.Collection.extend({
  url: '/planet',
  
});

var PlanetView = Backbone.View.extend({
  el: '#planet-view',

  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
    this.collection.fetch();
    this.render();
  },

  render: function() {
    var html = '<b>Id:</b> ' + this.collection.get('_id');
    html += ', name: ' + this.collection.get('name');
    html += ', x_coord: ' + this.collection.get('x_coord');
    html += ', y_coord: ' + this.collection.get('y_coord');
    html += ', owner: ' + this.collection.get('owner');
    this.$el.html(html);
    return this;
  }
});

var planet = new PlanetCollection();
var planetView = new PlanetView({collection: planet});

