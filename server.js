var app = require('http').createServer(handler)
var io = require('socket.io').listen(app)
var fs = require('fs')
var path = require('path')
var listeners = 0

app.listen(27070);
function handler (req, res) {
  console.log('Request is being processed.');     
  var filePath = '.' + req.url;
  if(filePath == './index.html')
	filePath = './index.html';
  else if (filePath == './play.html')
      filePath = './play.html'; 
  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }
  fs.exists(filePath, function(exists) {
    if (exists) {
      fs.readFile(filePath, function(error, content) {
        if (error) {
          res.writeHead(500);
          res.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    }
    else {
      res.writeHead(404);
      res.end();
    }
  });
}

io.sockets.on('connection', function (socket) {
  console.info("Connected")
  socket.emit('assigned', ++listeners);
  socket.on('disconnect', function (socket) {
    console.info("Disconnected")
    --listeners;
  });
  
var chat_log = [];  
socket.on('chat', function(dataq){
	chat_log.push(dataq.name+": "+dataq.message);
	console.log(chat_log);
	io.sockets.emit("update", {log: chat_log});
})

io.emit("start", {log: chat_log});
  socket.on('play', function (data) {
    io.sockets.emit('play', data);
  }).on('pause', function (data) {
    io.sockets.emit('pause', data);
  });
});

function setbit(offset, value) {
  listeners += (1 << offset)
}

function nextPlayerId () {
  current = listeners;
  listeners++;
  axb = a ^ b;
  getOffset()
}

function getOffset (a, b) {
}
