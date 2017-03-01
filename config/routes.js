module.exports.routes = {

  // HTML Views
  '/': {view: 'homepage' },
  'GET /profile': {view: 'auth/index'},
  'GET /galaxy': {view: 'auth/galaxy'},
  'GET /login': {view: 'login'},
  'GET /signup': {view: 'signup'}
};
