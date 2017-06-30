const server = require('http').createServer(require('../app'));
const db = require('./db').db;
var port = process.env.port || 3000;
var io = require('socket.io')(server)

const chalk = require('chalk');

if (process.env.SYNC){
	db.sync(/*{force: true}*/)
		.then(function(){
			console.log( chalk.green('db sync complete' ) );
		})
	.catch(function(err){
		console.log( chalk.red(err) );
	})
}

server.listen(port, function(){
	console.log(  chalk.blue('server listening on port... ', port)  )
})	

setInterval(function(){
	console.log( chalk.blue( Date.now() ) )
	//io.emit('do', {})
}, 60000);
