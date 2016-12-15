(function () {
    // 'use strict';

    angular
        .module('frontResources')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($mdSidenav, $stateParams, API_URL, $rootScope, $http, $state, $mdDialog) {
        var vm = this;
        vm.toggleSidenav = toggleSidenav;
        vm.tabNumber = 0;
        vm.contact = {
            firstName: "Swati",
            lastName: "Angirish",
            email: $stateParams.param
        }
        var access_token = $rootScope.loggedInsso;
        vm.onLogout = function () {
            $http.post(API_URL + "api/users/logout?access_token=" + access_token)
                .success(function (data) {
                    sessionStorage.removeItem('token');
                    $state.go('login');
                })

        }

        function toggleSidenav(menuId) {
            $mdSidenav(menuId).toggle();
        };

        vm.tiles = buildGridModel({
            title: "",
            background: "",
            image: ""
        });


        vm.modes = buildModeModel({
            title: "Mode-",
            background: ""
        });

        vm.goHome = goHome;

        function goHome() {
            $state.go('login');
        }


        vm.onTabChanges = function(tabNumber){
            if(vm.tabNumber !== undefined){
            vm.tabNumber = tabNumber;
            }
        }

        vm.showAdd = function (ev) {
            $mdDialog.show({
                    controller: AddScreenController,
                    templateUrl: '../app/home/addScreen.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: vm.customFullscreen
                })
                .then(function (answer) {

                }, function () {

                });
        }

        var AddScreenController = function ($scope, $mdDialog) {
            $scope.Cancel = function () {
                $mdDialog.cancel();
            };

            $scope.Save = function () {

                var name = $scope.name;
                var room = {
                    title: name,
                    image: "fa fa-bed fa-5x",
                    background: "deepBlue"
                }
                if(vm.tabNumber === 0){
                vm.tiles.unshift(room)
                }
                else
                    {
                        vm.modes.unshift(room);
                    }
                $mdDialog.cancel();
            };
        }


        vm.goToPage = goToPage;

        function goToPage(tile) {

            switch (tile.title) {
            case 'Bedroom 1':
                $state.go('main');
                break;
            case 'Television':
                $state.go('television');
                break;
            case 'Kitchen':
                $state.go();
                break;
            case 'Music Player':
                $state.go('music');
                break;
            case 'Lock':
                $state.go();
                break;
            case 'AC':
                $state.go('airConditioner');
                break;
            }

        };

        function buildGridModel(tileTmpl) {
            var it, results = [];

            for (var j = 0; j < 6; j++) {

                it = angular.extend({}, tileTmpl);

                switch (j + 1) {
                case 1:
                    it.background = "red";
                    it.title = "Bedroom 1";
                    it.image = "fa fa-bed fa-5x";
                    break;

                case 2:
                    it.background = "green";
                    it.title = "Television";
                    it.image = "fa fa-television fa-5x";
                    break;
                case 3:
                    it.background = "darkBlue";
                    it.title = "Kitchen";
                    it.image = "fa fa-cutlery fa-5x";
                    break;
                case 4:
                    it.background = "blue";
                    it.title = "Music Player";
                    it.image = "fa fa-music fa-5x";
                    break;

                case 5:
                    it.background = "yellow";
                    it.title = "Lock";
                    it.image = "fa fa-lock fa-5x";
                    break;
                    break;

                case 6:
                    it.background = "pink";
                    it.title = "AC";
                    it.image = "fa fa-snowflake-o fa-5x";
                    break;
                case 7:
                    it.background = "darkBlue";
                    it.title = "Bathroom 1";
                    it.image = "fa fa-shower fa-5x";
                    break;
                case 8:
                    it.background = "purple";
                    it.title = "Bedroom 3";
                    it.image = "fa fa-bed fa-5x";
                    break;
                case 9:
                    it.background = "deepBlue";
                    break;
                case 10:
                    it.background = "lightPurple";
                    break;
                case 11:
                    it.background = "yellow";
                    break;
                }

                results.push(it);
            }
            return results;
        }

        function buildModeModel(tileTmpl) {
            var it, results = [];

            for (var j = 0; j < 4; j++) {

                it = angular.extend({}, tileTmpl);

                switch (j + 1) {
                case 1:
                    it.background = "red";
                    it.title = "Sleeping";
                    it.image = "fa fa-moon-o fa-5x";
                    break;

                case 2:
                    it.background = "green";
                    it.title = "Away";
                    it.image = "";
                    break;
                case 3:
                    it.background = "darkBlue";
                    it.title = "Movie";
                    it.image = "fa fa-film fa-5x";
                    break;
                case 4:
                    it.background = "blue";
                    it.title = "Vacation";
                    it.image = "fa fa-umbrella fa-5x";
                    break;


                }

                results.push(it);
            }
            return results;
        }

    }
})();
