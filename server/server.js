const server = require('http').createServer(require('../app'));
const db = require('./db').db;
var port = process.env.port || 3000;
var io = require('socket.io')(server)

if (process.env.SYNC){
	db.sync(/*{force: true}*/)
		.then(function(){
			console.log('db sync complete');
		})
	.catch(function(err){
		console.log(err);
	})
}

server.listen(port, function(){
	console.log('server listening on port... ', port)
})	

setInterval(function(){
	io.emit('do', {})
}, 60000);
