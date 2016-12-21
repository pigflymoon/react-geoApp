
/*
 * GET home page.
 */

exports.pure = function(req, res){
  res.render('pure', { title: 'Express', foo: {bar:'baz'} });
};
