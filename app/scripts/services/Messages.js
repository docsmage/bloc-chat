blocChat.factory('Messages', ['$firebaseArray', function($firebaseArray) {

  var firebaseRef = new Firebase("https://rcsblocchat.firebaseio.com/");
	
	var messages = $firebaseArray(firebaseRef.child('messages'));
	
  return {
    all: messages,

		getRoomMessages: function (room) {
			// logic to display room messages - when a particular room is opened, it's messages should display in the view
		}
	
	}

}]);