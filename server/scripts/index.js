/*get a gif stream*/
var Client = require('node-rest-client').Client;
var giphy = new Client();

var urlRoot = "http://"
var host = 'api.giphy.com';
var path = '/v1/gifs/trending'

var apiKey = ''
var limit = '25';
var rating = '';

var config = {
	urlRoot: "http://",
	host: "api.giphy.com",
	path: "/v1/gifs/trending",
	apiKey: '', //process.env.GIPHY_KEY
	limit: "/25"
}
// going to use this so we can dynamically pass in what we want
var options = function(){

}

//URL -> universal resource locator. lols who knew 
function buildUrl(config){
	var c = config; 
	return c.urlRoot + c.host + c.path + c.apiKey + c.limit
}

console.log(buildUrl(config));
//giphy.get()