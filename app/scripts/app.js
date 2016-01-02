var blocChat = angular.module("blocChat", ["ui.router", "firebase"]);

blocChat.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/');
    // removes /!/ from URL

  $stateProvider.state('home', {
      url: '/',
      controller: 'MainCtrl',
      templateUrl: '/templates/home.html'
    });

});