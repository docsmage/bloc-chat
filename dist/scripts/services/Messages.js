blocChat.factory('Messages', ['$firebaseArray', '$cookies', 'Rooms', function($firebaseArray, $cookies, Rooms) {

  var firebaseRef = new Firebase("https://rcsblocchat.firebaseio.com/");
  var messages = $firebaseArray(firebaseRef.child('messages'));
		
  return {
		
    send: function(messageContent, room) {
			messages.$add({
				content: messageContent,
				username: $cookies.blocChatCurrentUser,
				sentAt: Date(),
				roomId: room
			});
    }
		
  }
	
}]);