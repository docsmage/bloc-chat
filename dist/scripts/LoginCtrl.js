blocChat.controller('LoginCtrl', ['$scope', '$cookies', '$modalInstance', function ($scope, $cookies, $modalInstance) {
	
  var closeModalInstance = function(modalInstance) {
    modalInstance.close('exit');
  };

  $scope.createUserName = function(userName) {
    if (userName && userName !== '') {
      $cookies.blocChatCurrentUser = userName;
      closeModalInstance($modalInstance);
    }
    else {
      $scope.errorMessage = 'Invalid username.';
    }
  };

}]);

// Pulled from https://github.com/brendanmcgivern/bloc-chat/blob/master/app/scripts/controllers/createUserCtrl.js &  http://stackoverflow.com/questions/21883559/opening-a-modal-in-a-route-in-angularjs-with-angular-ui-bootstrap - I have no idea what I'm doing with this, really.