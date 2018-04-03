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

                        $timeout(function(){
                            $('.mainNavbar').css('display', 'none');
                        }, 500);

                    } else {
                        $('.mainNavbar').css('display', 'block');
                        // $('.mainNavbar').removeClass('scrolled');

                        $timeout(function(){
                            $('.mainNavbar').removeClass('scrolled');
                        }, 500);

                     };
		    });
		 });
	}
})(); 
