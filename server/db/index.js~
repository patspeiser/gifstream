/*
	initialize Sequelize to manage database access 
	define a model (DB table)
       	export both the db connection as well as the models
*/
const Sequelize = require('Sequelize');
const db = new Sequelize(process.env.DATABASE_URL);


var Gif = db.define('post', {
	label: Sequelize.STRING,
    	url: Sequelize.STRING
});

module.exports = {
	db: db,
	models: {
		Gif: Gif
	}
}
