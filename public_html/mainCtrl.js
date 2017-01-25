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
				if (scrollTop >= 150) {
					$('.mainNavbar').addClass('scrolled');
				} else if (scrollTop < 150) {
						$('.mainNavbar').removeClass('scrolled');
				}

			});
		});

	}
})(); 