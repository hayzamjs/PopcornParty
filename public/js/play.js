var video;
var userName = localStorage.getItem("name");
var socket = io.connect();
var room = localStorage.getItem("roomId");
var url = localStorage.getItem("url");

function htmlClean(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function videoSetup(){
	
	video = document.getElementById("myMedia");
	video.src = url;
	
}

function sendMessage(){
	
	var messageTo = $("#message").val();
	if(messageTo == ''){
		alert('Nothing to send, sorry!');
	}
	else{
	var message = htmlClean(messageTo);
	socket.emit('Message', {
	        message: message,
	        username: userName,
	        room: room
	});
	document.getElementById('message').value = "";
}
}

socket.on('Inbox', function (data) {

    var textMessage = data.username + ' : '+ data.message;
    $("ul").append("<li class='list-group-item'>" + textMessage + "</li>");
    var objDiv = document.getElementById("chatter");
    objDiv.scrollTop = objDiv.scrollHeight;
    var x = document.getElementById("myAudio");
    x.play();
	
});

socket.emit('join room', {
        message: "Join room",
        username: userName,
        room: room
});

socket.on('PauseVideo', function (data) {
	video = document.getElementById("myMedia");
	video.pause();
});

socket.on('PlayVideo', function (data) {
	video = document.getElementById("myMedia");
	video.play();
});

socket.on('SyncPlayback', function (data) {
	var timePlay = data.message;
	video = document.getElementById("myMedia");
	video.currentTime=timePlay;
});

function PlayVideo(){
socket.emit('PlayVideo', {
  message: "Play Video",
  username: userName,
  room: room
});
}

function PauseVideo(){
socket.emit('PauseVideo', {
  message: "Pause Video",
  username: userName,
  room: room   
});
}

function syncUp(){
	
	video = document.getElementById("myMedia");
	var timeToSync = video.currentTime;
	socket.emit('SyncPlayback', {
	  message: timeToSync,
	  username: userName,
	  room: room   
	});
	
}
