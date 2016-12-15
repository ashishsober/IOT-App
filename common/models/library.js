'use strict';

module.exports = function(Library) {
  //console.log(Library);

  Library.greet = function(msg, cb) {
      cb(null, 'Greetings... '+msg);
    }

     Library.remoteMethod('greet', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string',},
          // http: {path: '/sayhi', verb: 'get'}
    });

     // Library.create = function(req,res,next){
     //      console.log(req);
     // };


};
