module.exports.routes = {

  // HTML Views
  '/': {view: 'homepage' },
  'GET /game/profile': {view: 'game/index'},
  'GET /game/galaxy': {view: 'game/galaxy'},
  'GET /login': {view: 'login'},
  'GET /signup': {view: 'signup'},
  //Actions:
  'POST /login': 'AuthController.login',
  'POST /signup': 'UserController.create',
  '/logout': 'AuthController.logout',
  'GET/game' : {controller: 'game', action: 'game'}
  
};

