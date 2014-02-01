// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '123', // your App ID
		'clientSecret' 	: '123', // your App Secret
		'callbackURL' 	: 'http://localhost:1337/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: '123',
		'consumerSecret' 	: '123',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '123',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
