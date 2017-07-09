var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var serverPort = 1818;
var fs = require('fs');
var util = require('util');

var now = new Date();
var dateStr = now.getUTCFullYear().toString() + "/" +
          (now.getUTCMonth() + 1).toString() +
          "/" + now.getUTCDate() + " " + now.getUTCHours() +
          ":" + now.getUTCMinutes() + ":" + now.getUTCSeconds();

var log_file = fs.createWriteStream(__dirname + '/log.txt', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //To Write to a console file
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

server.listen(serverPort);
app.set('port', (process.env.PORT || serverPort));

app.use(express.static(__dirname + '/public'));

console.log('The server is running on ' + serverPort, true);
console.log('Started on ' + dateStr)
console.log('--------------------------------------------');

io.sockets.on('connection', function (socket) {

        socket.on('join room', function(data) {
        socket.join(data.room);
        console.log("User " + data.username + " Joined Room : " + data.room);
        });
		
 	socket.on('Message', function (data) {
	io.sockets.in(data.room).emit('Inbox', data);
			console.log('Message sent in ' + data.room);
    	});

 	    socket.on('PlayVideo', function (data) {
        socket.broadcast.to(data.room).emit('PlayVideo', data)
			console.log('Video Played In ' + data.room + ' initiated by ' + data.username);
    	});

        socket.on('PauseVideo', function (data) {
			console.log('Video Paused In ' + data.room + ' initiated by ' + data.username);
        socket.broadcast.to(data.room).emit('PauseVideo', data)
        });
		
        socket.on('SyncPlayback', function (data) {
			console.log('Syncing Playback in ' + data.room + ' initiated by ' + data.username)
        socket.broadcast.to(data.room).emit('SyncPlayback', data)
        });

});


