module.exports = {
index: function(req,res){
res.view({
  user: req.user
});
},
galaxy: function(req,res){
res.view({
  user: req.user
});
}
};