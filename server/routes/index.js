const router = require('express').Router();
const Util = require('../scripts/util.js');
module.exports = router;

router.get('/', function(req, res, next){
	res.send('200 success');
});

router.get('/trending', function(req, res, next){
	/*
	Util.trending()
		.then(function(data){
			res.send(data);
		})
		.catch(next);
	*/
	res.send('200 success');
});

