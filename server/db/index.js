/*
	initialize Sequelize to manage database access 
	define a model (DB table)
    export both the db connection as well as the models
*/

const Sequelize = require('Sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

var Gif = db.define('gif', {
	label: {type: Sequelize.STRING},
	source_id: {type: Sequelize.STRING},
    url: {type: Sequelize.STRING},
    source_post_url: {type: Sequelize.STRING},
    embed_url: {type: Sequelize.STRING},
});

var User = db.define('user', {
	username: {type: Sequelize.STRING},
	password: {type: Sequelize.STRING}
});

var Stream = db.define('stream', {
	label: {type: Sequelize.STRING}
})

module.exports = {
	db: db,
	models: {
		Gif: Gif,
		User: User,
		Stream: Stream
	}
}
