blocChat.controller('MainCtrl', function ($scope, Room) {

  $scope.title = "Bloc Chat";

	$scope.rooms = Room.all;
	
	$scope.addRoom = function () {
		Room.addRoom($scope.newRoomName)
	};
	
});