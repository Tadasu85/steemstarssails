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
  el: "#game-view",

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
var GameView = new GameView({collection: game});

