(function() {
  'use strict';

  angular
    .module('frontResources')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope, $state, $window,homeServices) {

    $log.debug('runBlock end');

$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
          var isLogin = toState.name === "login";
          var userInfo = homeServices.getUserInfo(); //getting the access control
      
      if (!userInfo.authenticate || toState.name== 'home' || toState.name== 'main' || toState.name == 'television' || toState.name == 'music' || toState.name == 'airConditioner') {
           if(isLogin){
                return; // no need to redirect 
            } else if(toState.name != "login" && userInfo.authenticate) {
              //console.log("still going home");
              return
            }

        } else {
              event.preventDefault(); // stop current execution
              $state.go('home');
        } 
       
            // now, redirect only not authenticated
        if(userInfo.authenticate === false) {
            event.preventDefault(); // stop current execution
            $state.go('login'); // go to login
        }
    });
  }

})();
