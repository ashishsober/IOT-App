(function() {
	angular.module('frontResources')
	.controller('MusicController', musicController)

	function musicController () {
		var vm = this;
		vm.title = "Living Room";
		vm.songName = "Never Forget You";
		vm.subTitle = "MENK & Lawrance";
		vm.imageSrc = "assets/images/thumbnail.png";
		vm.startTime = "1:00";
		vm.endTime = "3:50";
		vm.seconds = 230;
	} 
})();