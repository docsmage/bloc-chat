blocChat.controller('MainCtrl', function ($scope, Rooms, Messages) {

  $scope.title = "Bloc Chat";
	
	$scope.roomTitle = "Select a Room";

	$scope.rooms = Rooms.all;
	
	// set room title & content
	$scope.setRoom = function (room) {
		$scope.roomTitle = room.name;
		Rooms.getRoomMessages(room.$id, function (messages) {
			$scope.messages = messages;
			$scope.$apply();
			$scope.roomId = room.$id;
		});
	};
	
	// create a new room
	$scope.addRoom = function () {
		Rooms.addRoom($scope.newRoomName)
	};
	
	// send a message - not yet active
	$scope.sendMessage = function () {
		Messages.send($scope.messageContent, $scope.roomId);
	};
	
});