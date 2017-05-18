/**
* PostService
*
* @description :: Dummy service for our dummy models we also use this service in our tests.
*/

module.exports = {
getPostsWithComments: function () {
   return Post
     .find()
     .populate('messages');
}
};