(function() {
	// 'use strict';
	angular.module('frontResources')
	.controller('AirConditionerController', airConditionerController)

	function airConditionerController () {
		var vm = this;
		vm.title = "Air Conditioner";
	} 
})();