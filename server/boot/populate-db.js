module.exports = function (app) {

  var User = app.models.User
  

   var remotes = app.remotes();
  // modify all returned values
  // remotes.after('**', function (ctx, next) {
  //   console.log(ctx);
  //   ctx.result = {
  //     data: ctx.result
  //   };

  //   next();
  // });

  
  // var users = [
  //   {
  //     "username": "hacksparrow",
  //     "email": "captain@hacksparrow.com",
  //     "password": "hello"
  //   },
  //   {
  //     "username": "neo",
  //     "email": "neo@hacksparrow.com",
  //     "password": "meow"
  //   }
  // ]

  
  // users.forEach(function (user) {
  //   User.create(user, function (err, instance) {
  //     if (err) return console.log(err)
  //     console.log('Added:')
  //     console.log(instance)
  //   })
  // })

}
