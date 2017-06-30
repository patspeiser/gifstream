angular.module('gifstream',  ['ui.router'] );

angular.module('gifstream')
	.run( function($state) {
		$state.go('home');
	});


angular.module('gifstream')
	.config( function( $stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './home/home.html',
				controller: function(){}
			})
			.state('signin', {
				url: '/signin',
				templateUrl: './signin/signin.html',
				controller: function(){}
			})
	})