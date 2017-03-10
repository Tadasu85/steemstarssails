module.exports.routes = {

  // HTML Views
  '/': {view: 'homepage' },
  'GET /permission/profile': {view: 'permission/index'},
  'GET /permission/galaxy': {view: 'permission/galaxy'},
  'GET /login': {view: 'login'},
  'GET /signup': {view: 'signup'},
  //Actions:
  'POST /login': 'AuthController.login',
  'POST /signup': 'UserController.create',
  '/logout': 'AuthController.logout',
  'GET /testing' : {controller: 'permission', action: 'testing'}
  
};

