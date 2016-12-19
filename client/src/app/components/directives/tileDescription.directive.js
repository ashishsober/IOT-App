(function() {
  'use strict';

  angular
    .module('frontResources')
    .directive('tileDescription', tileDescription);

  /** @ngInject */
  function tileDescription() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/directives/tileDescription.html',
      scope: {
          tiledetails: '=tiledetails'
      }
    };

    return directive;

  }

})();
