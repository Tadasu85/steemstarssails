module.exports.routes = {

  // HTML Views
  '/': {view: 'homepage' },
  'GET /user/profile': {view: 'user/index'},
  'GET /user/galaxy': {view: 'user/galaxy'},
  'GET /login': {view: 'login'},
  'GET /signup': {view: 'signup'},
  //Actions:
  'POST /login': 'AuthController.login',
  '/logout': 'AuthController.logout'
  
};

