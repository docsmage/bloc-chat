blocChat.factory('Rooms', ['$firebaseArray', function($firebaseArray) {

  var firebaseRef = new Firebase("https://rcsblocchat.firebaseio.com/");
	
  var rooms = $firebaseArray(firebaseRef.child('rooms'));
	var messages = firebaseRef.child('messages');
	
  return {
    all: rooms,

		// add a new room
		addRoom: function (roomName) {
			rooms.$add({name: roomName});
		},
		
		// display messages in a room
		getRoomMessages: function (roomId, callback) {					messages.orderByChild('roomId').equalTo(roomId).on('value', function(messages) {
				callback(messages.val());
			});
			}
		
	}
}]);