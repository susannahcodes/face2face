console.log('Chat is setting up');

var button = document.getElementById("enterButton");
var msgInput = document.getElementById("msginput");
var messages = document.getElementById("messages");

function appendMessage(nickname, message) {
	var message = $('<p><span class="nickname">' + nickname + '</span> <span class="message">' + message + '</span></p>');
	$(messages).append(message);
	
}

function sendMessage() {
	webrtc.sendDirectlyToAll("test", 'chatMessage', {
		nickname: nickname,
		message: msgInput.value
	});
	appendMessage(nickname, msgInput.value) 
	msgInput.value = null;
	
	console.log('Message sent');
}

msgInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		sendMessage();
	}
});

button.addEventListener('click', function () {
	// put the message into messages
	// send the message
	sendMessage();
	
	
	
	
	//alert(msgInput.value) 
});

webrtc.on('channelMessage', function (peer, label, data) {
	if (data.type === 'chatMessage') {
		appendMessage(data.payload.nickname, data.payload.message);
		
	}
 })
