var blocChat = angular.module("blocChat", ["ui.router", "firebase", "ui.bootstrap", "ngCookies"])


// config states & controllers
.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

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

})

// set a username
.run(['$cookies', '$modal', function($cookies, $modal) {
	
		if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '') {
			$modal.open({
				templateUrl: '/templates/login.html',
				controller: 'LoginCtrl',
				size: 'sm',
				backdrop: 'static',
				keyboard: false
			});
		}
	
}]);