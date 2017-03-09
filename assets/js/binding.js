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
var tmplText = $('#user-item-tmpl').html();
var userTmpl = _.template(tmplText);