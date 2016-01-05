blocChat.factory('Rooms', ['$firebaseArray', function($firebaseArray) {

  var firebaseRef = new Firebase("https://rcsblocchat.firebaseio.com/");
  var rooms = $firebaseArray(firebaseRef.child('rooms'));
	
	var messages = $firebaseArray(firebaseRef.child('messages'));
	
  return {
    all: rooms,

		addRoom: function (roomName) {
			rooms.$add({name: roomName});
		},
		
//		Purely for the purposes of getting some messages into firebase
		sendMessage: function (messageContent) {
		messages.$add({content: messageContent});
	}
		
	}
}])