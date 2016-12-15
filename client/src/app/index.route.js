(function() {
  'use strict';

  angular
    .module('frontResources')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('television', {
        url: '/television',
        templateUrl: 'app/television/television.html',
        controller: 'televisionController'

      })
     .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
     .state('music', {
        url: '/music',
        templateUrl: 'app/music/music.html',
        controller: 'MusicController',
        controllerAs: 'music'
      })
      .state('airConditioner', {
        url: '/airConditioner',
        templateUrl: 'app/airConditioner/airConditioner.html',
        controller: 'AirConditionerController',
        controllerAs: 'airConditioner'
      })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

})();
