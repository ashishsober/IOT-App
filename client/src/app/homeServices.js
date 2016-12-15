

angular
    .module('frontResources').factory('homeServices', function($rootScope){
	var customers  =[
		 {name:'laxmi',city:'bhopal'},
		 {name:'ashish',city:'kanpur'},
		 {name:'sunnu',city:'raipur'}];

	var factory={};
	factory.getCustomers = function(){
		return customers;
	}

	factory.getUserInfo = function(){
		
		//sent true if the sso token is present and save the sso token globally
		if (typeof(Storage) !== "undefined") {
                var sso = sessionStorage.getItem("token");
                if (sso !== null) {
                    sso = sessionStorage.getItem("token");
                    $rootScope.loggedInsso = sso;
                    return { authenticate : true };   
                } else {
                	return { authenticate : false };
                } 

            }
	}
	return factory;
});