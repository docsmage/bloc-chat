blocChat.controller('MainCtrl', function ($scope, Rooms, Messages, $rootScope) {

  $scope.title = "Bloc Chat";
	
	$scope.roomTitle = "Select a Room";

	$scope.rooms = Rooms.all;
	
	$scope.messages = Messages.all;

	// adapted from BlocItOff
	$rootScope.$watch("currentRoom", function (room) {
		if (room !== undefined) {
			$scope.setRoom(room);
		}
	});
	
	$scope.setRoom = function (roomName) {
		$scope.roomName = $scope.room.name;
		$scope.messages = Messages.getRoomMessages(room);
// getRoomMessages() not yet complete
	};
	
	$scope.addRoom = function () {
		Rooms.addRoom($scope.newRoomName)
	};
	
	$scope.sendMessage = function () {
		Rooms.sendMessage($scope.messageContent)
	};
	
});