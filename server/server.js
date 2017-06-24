const server = require('http').createServer(require('../app'));
const db = require('./db').db;
var port = process.env.port || 3000;

if (process.env.SNYC){
	db.sync()
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