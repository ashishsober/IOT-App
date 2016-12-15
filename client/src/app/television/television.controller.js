

  angular
    .module('frontResources')
    .controller('televisionController', televisionController)
	.controller('ToastCtrl', function($scope, $mdToast) {
	  $scope.closeToast = function() {
	    $mdToast.hide();
	  }
	});

 function televisionController($http,API_URL,$location,$state,$scope,$mdToast) {
    var vm=this;


    var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };


$scope.toggle = true;

 

  

  

 

}
