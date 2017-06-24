const router = require('express').Router();
module.exports = router;

router.get('/', function(req, res, next){
	res.send('200 success');
})