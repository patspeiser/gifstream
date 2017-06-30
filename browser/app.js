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
				template: "<div> Home template </div>",
				controller: function(){}
			})
			.state('signin', {
				url: '/signin',
				template: "<div> signin / sign up template </div>",
				controller: function(){}
			})
	})