/**
* Post.js
*/

module.exports = {
attributes: {
   title: {type: 'string'},
   body: {type: 'string'},
   timestamp: {type: 'datetime'},
   messages: {model: 'Messages'}
}
};