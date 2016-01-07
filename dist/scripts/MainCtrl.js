blocChat.controller('MainCtrl', function ($scope, Rooms, $rootScope) {

  $scope.title = "Bloc Chat";
	
	$scope.roomTitle = "Select a Room";

	$scope.rooms = Rooms.all;

	// adapted from BlocItOff
	$rootScope.$watch("currentRoom", function (room) {
		if (room !== undefined) {
			$scope.setRoom(room);
		}
	});
	
	// set the room - not yet active
	$scope.setRoom = function (roomName) {
		$scope.roomName = $scope.room.name;
		$scope.messages = Messages.getRoomMessages(room);
// getRoomMessages() not yet complete
	};
	
	// create a new room
	$scope.addRoom = function () {
		Rooms.addRoom($scope.newRoomName)
	};
	
	// send a new message - not yet active
	$scope.sendMessage = function () {
		Rooms.sendMessage($scope.messageContent)
	};
	
});