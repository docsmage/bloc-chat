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
	
	// set the room title & content
	$scope.setRoom = function (room) {
		$scope.roomTitle = room.name;
		Rooms.getRoomMessages(room.$id, function (messages) {
			$scope.messages = messages;
			$scope.$apply();
		});
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