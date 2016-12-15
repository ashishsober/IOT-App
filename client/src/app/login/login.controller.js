

  angular
    .module('frontResources')
    .controller('LoginController', LoginController);

 function LoginController($http,API_URL,$location,$state) {
    var vm=this;
    vm.formData = {
    	'email': 'ashishg@mirafra.com',
    	'password': 'mirafra'
    }
    vm.toggle = true;

    vm.onSubmit=function(){
	  $http.post(API_URL+"api/users/login",vm.formData)
	   	.success(function(data){
	   		vm.msg="Success";
	   		sessionStorage['token'] = data.id;
	   		$state.go('home');
	   	})
	   	.error(function(data){
	   		vm.msg=data.error.message;
	   	 })
	};

	vm.register=function(){
		
      $http.post(API_URL+"api/users",vm.registerData)
	   	.success(function(data){
	   		vm.registerMsg="Success";
	   		vm.toggle = true;
	   	})
	   	.error(function(data){
	   		vm.registerMsg=data.error.message;
	   	 })
	};


}