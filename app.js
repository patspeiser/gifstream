const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const socket = require('socket.io-client')(process.env.SOCKET_SERVER || 'http://localhost:3000');
const server = require( path.join(__dirname + '/server/server.js') );
const Util = require( path.join(__dirname + '/server/scripts/util.js') ); 

module.exports = app;

app.use(express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use('/api', require('./server/routes'));

app.get('/', function(req, res, next){
	res.sendFile( path.join(__dirname, 'index.html') ) 
});

socket.on('do', function(){
	Util.trending()
		.then(function(data){
			//do something here
		})
		.catch();
});
