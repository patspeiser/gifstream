/*get a gif stream*/
const Promise = require('bluebird');
var Client = require('node-rest-client').Client;
var giphy = new Client();


//lol will work for now
var config = {
	urlRoot: "http://",
	host: "api.giphy.com",
	path: "/v1/gifs/trending",
	apiKey: '', //process.env.GIPHY_KEY
	limit: "&limit=25",
	rating: "rating=g"
}

//URL -> universal resource locator. lols who knew 
// this is a stupid ass thing to do but i just wanna make it work for now
function buildUrl(config){
	var c = config; 
	return c.urlRoot + c.host + c.path + c.apiKey + c.limit
}

// trending endpoint
function _trending(){
	return new Promise(function(resolve, reject){
		giphy.get(buildUrl(config), function(data, response){
				if (data){
					resolve(data);	
				}  else {
					reject();
				}
		});
	})
};

module.exports = {
	trending: _trending
}

