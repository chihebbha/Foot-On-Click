/**
 * Created by raja on 19/04/2016.
 */

var express = require('express');
var router = express.Router();
var http = require('http');


var   port = 300;

var httpServer = http.createServer(function (req, res) {

    res.end("hello raaja jlidi");
});
httpServer.listen(port, '127.0.0.1');



var io = require('socket.io').listen(httpServer);

var users ={};
io.sockets.on('connection', function (socket) {
    //var me = false;
    //console.log("new user");
    //var me;
    //
    //for(var k in users){
    //
    //    socket.emit('newusers',users[k]);
    //}



    //   socket.emit('welcome', { message: 'Welcome!' });
    socket.on('login', function (user) {



        console.log(user.message)
       // users[me.id]=me;
       date = new Date();
        var h =date.getHours()+"h";
        var m =date.getMinutes()+"min";
        io.sockets.emit('newusers',user,m,h);
      //  console.log(me.fid);
    });




});

module.exports = router;
