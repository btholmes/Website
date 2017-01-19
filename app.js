angular.module("myApp", ['ui.router', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		.state('notes', {
			name: 'notes',
			url: '/notes',
			templateUrl: 'main.webapp.app.notes/views/notes.html',
			controller: 'notesCtrl',
			controllerAs: 'vm'
		})
		.state('passRecovery', {
			name: 'passRecovery',
			url: '/passRecovery', 
			templateUrl: 'main.webapp.app.login/views/passRecovery.html',
			controller: 'loginCtrl', 
			controllerAs: 'vm'
		})
		.state('home', {			
			name: 'home', 
			url: '/home',
			templateUrl: 'main.webapp.app.home/views/home.html',
//			template: '<h1>Home</h1>',
			controller: 'myCtrl', 
			controllerAs: 'vm'
			
		})
		.state('game', {
			url: '/game',
			templateUrl: 'main.webapp.app.home/views/home-game.html'	
		})
//		.state('home.scores', {
//			url: '/scores',
//			views: {
//				'scores@home' : {
//					templateUrl: 'main.webapp.app.home/views/home-scores.html'
//				}
//			}
//		})
		.state('about', {
			name: 'about', 
			url: '/about', 
			templateUrl: 'main.webapp.app.about/views/about.html', 
//			template: '<h1>About</h1>',
			controller: 'aboutCtrl',
			controllerAs: 'vm'
		})
		.state('portfolio', {
			name: 'portfolio', 
			url: '/portfolio', 
			templateUrl: 'main.webapp.app.portfolio/views/portfolio.html', 
			controller: 'portfolioCtrl',
			controllerAs: 'vm'
		})
		.state('blog', {
			name: 'blog', 
			url: '/blog', 
			templateUrl: 'main.webapp.app.blog/views/blog.html', 
			controller: 'blogCtrl',
			controllerAs: 'vm'
		})
		.state('blog.read', {
			url: '/readBlog',
			views: {
				'read@blog' : {
					templateUrl: 'main.webapp.app.blog/views/readBlog.html'
//					template: '<h1>Read</h1>'
				}
			}
		})
		.state('blog.write', {
			url: '/writeBlog',
			views: {
				'write@blog' : {
					templateUrl: 'main.webapp.app.blog/views/writeBlog.html'
//					template: '<h1>Write</h1>'
				}
			}
		})
		.state('contacts', {
			name: 'contacts', 
			url: '/contacts', 
			templateUrl: 'main.webapp.app.contact/views/contacts.html', 
			controller: 'contactsCtrl',
			controllerAs: 'vm'
		}) 
		.state('schedule', {
			name: 'schedule', 
			url: '/schedule', 
			templateUrl: 'main.webapp.app.calendar/views/schedule.html',
			controller: 'scheduleCtrl',
			controllerAs: 'vm'
		})
		.state('map', {
			name: 'map', 
			url: '/map', 
			templateUrl: 'main.webapp.app.googleMap/views/map.html', 
			controller: 'mapCtrl',
			controllerAs: 'vm'
		});

		
	});