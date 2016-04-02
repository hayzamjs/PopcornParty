$(function() {

    var socket = io.connect()
    var video = $("video").get(0)
    var _id = 17
    var _master = false

    var nameTo = localStorage.getItem("name");
    var name = nameTo[0].toUpperCase() + nameTo.slice(1);

    $(document).ready(function() {
        $("button").click(function() {
            var message = $("#message").val();
            $("#message").val("");
            socket.emit("chat", {
                name: name,
                message: message
            });
        })
        socket.on("update", function(dataq) {
            var textArr = dataq.log;
            var textMessage = textArr.pop();
            $("ul").append("<li class='list-group-item'>" + textMessage + "</li>");
            var objDiv = document.getElementById("chatter");
            objDiv.scrollTop = objDiv.scrollHeight;


            var x = document.getElementById("myAudio");
            x.play();

        })
        socket.on("start", function(dataq) {})
    })

    socket.on('assigned', function(data) {
        console.log('assigned ' + data);
        _id = data;
    });

    video.addEventListener('click', function() {
        if (!video.paused) {
            socket.emit('pause', {
                id: _id,
                currentTime: video.currentTime,
                sent_at: new Date().getTime()
            });
        } else {
            socket.emit('play', {
                id: _id,
                currentTime: video.currentTime,
                sent_at: new Date().getTime()
            });
        }
    });

    socket.on('play', function(data) {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/" +
            (currentdate.getMonth() + 1) + "/" +
            currentdate.getFullYear() + " - " +
            currentdate.getHours() + ":" +
            currentdate.getMinutes() + ":" +
            currentdate.getSeconds();
        $("ul").append("<li class='list-group-item'>" + name + ' : ' + 'Started at ' + datetime + "</li>");
        console.log('play');
        update(data);
        video.play();
    });

    socket.on('pause', function(data) {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/" +
            (currentdate.getMonth() + 1) + "/" +
            currentdate.getFullYear() + " - " +
            currentdate.getHours() + ":" +
            currentdate.getMinutes() + ":" +
            currentdate.getSeconds();
        $("ul").append("<li class='list-group-item'>" + name + ' : ' + 'Paused at ' + datetime + "</li>");
        console.log('pause');
        update(data);
        video.pause();
    });

    var update = function(data) {
        var now = new Date().getTime(),
            currentTime = video.currentTime,
            playTime = data.currentTime + ((now - data.sent_at) * 0.0001)
        video.currentTime = playTime;
    }
});

function setupVideo() {

    var video = document.getElementById('media');
    var url = localStorage.getItem("url"); //from index.html
    video.src = url;
    video.play();

}

function stopNotification() {

    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }

    document.getElementById("myAudio").remove();
}