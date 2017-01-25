(function(){
	'use strict';
		
	angular.module("myApp" )
	.controller("mainCtrl",mainCtrl);  
			
	mainCtrl.$inject = ['$timeout'];
	
	function mainCtrl($timeout){
		var vm = this;

		angular.element(document).ready(function() {
			var scrollTop = 0;
			$(window).scroll(function(){
				scrollTop = $(window).scrollTop();
				if (scrollTop >= 100) {
					$('.mainNavbar').addClass('scrolled');

					$timeout(function(){
						$('.mainNavbar').css('display', 'none');
					}, 500);

				} else if (scrollTop < 100) {
					$('.mainNavbar').css('display', 'block');
					// $('.mainNavbar').removeClass('scrolled');

					$timeout(function(){
						$('.mainNavbar').removeClass('scrolled');
					}, 1000);
				}

			});
		});

	}
})(); 