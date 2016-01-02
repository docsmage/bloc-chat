blocChat.factory('Room', ['$firebaseArray', function($firebaseArray) {

  var firebaseRef = new Firebase("https://rcsblocchat.firebaseio.com/");
  var rooms = $firebaseArray(firebaseRef.child('rooms'));
	
  return {
    all: rooms,

		addRoom: function (roomName) {
			rooms.$add({name: roomName});
		}
		
	}	
}])