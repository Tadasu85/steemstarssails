/**
* Post.js this is another dummy model.
*/

module.exports = {
attributes: {
   title: {type: 'string'},
   body: {type: 'string'},
   timestamp: {type: 'datetime'},
   messages: {model: 'Messages'}
}
};