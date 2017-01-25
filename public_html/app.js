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
		.state('home', {			
			name: 'home', 
			url: '/home',
			templateUrl: 'main.webapp.app.home/views/home.html',
//			template: '<h1>Home</h1>',
			controller: 'homeCtrl',
			controllerAs: 'vm'
			
		})
		.state('game', {
			url: '/game',
			templateUrl: 'main.webapp.app.home/views/home-game.html'	
		})
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
		.state('resume', {
			name: 'resume',
			url: '/resume',
			templateUrl: 'main.webapp.app.resume/views/resume.html',
			controller: 'resumeCtrl',
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