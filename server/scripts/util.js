/*various tools for getting a gif stream*/
const Promise = require('bluebird');
var Client = require('node-rest-client').Client;
var giphy = new Client();
var Gif = require('../db').models.Gif;

//lol will work for now
var config = {
	urlRoot: "http://",
	host: "api.giphy.com",
	path: "/v1/gifs/trending",
	apiKey: '?api_key=babd11539d204551871cb29d4844e671', //process.env.GIPHY_KEY
	limit: "&limit=50",
	rating: "rating=g"
}
 
// this works now but will need a library to handle query params and urls
function buildUrl(config){
	var c = config; 
	return c.urlRoot + c.host + c.path + c.apiKey + c.limit
}

// can add methods here
function _trending(){
	return new Promise(function(resolve, reject){
		giphy.get(buildUrl(config), function(data, response){
				if (data){
					var payload = data.data
					for (key in payload){
						Gif.findOrCreate({
							where: {
								source_id: payload[key].id,
								label: payload[key].slug,
								url: payload[key].url,
								source_post_url: payload[key].source_post_url,
								embed_url: payload[key].embed_url
							}
						})
						.then(function(gif){
							resolve(gif)	
						})
					}
				}  else {
					reject();
				}
		});
	});
};

/*
var Gif = db.define('post', {
	label: {type: Sequelize.STRING},
	source_id: {type: Sequelize.STRING},
    url: {type: Sequelize.STRING},
    source_post_url: {type: Sequelize.STRING},
    embed_url: {type: Sequelize.STRING},
});
*/

module.exports = {
	trending: _trending
}

