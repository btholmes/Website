(function() {
	'use strict';

	angular.module("myApp")
	.controller("resumeCtrl", resumeCtrl);
	
	resumeCtrl.$inject = ['$timeout'];
	
	function resumeCtrl($timeout) {
		var vm = this;
		vm.init = init;

		vm.init();

		function init(){

			$('.mainNavbar').css("display", "block");
			$timeout(function(){
				$('.mainNavbar').css("opacity", "1");
			}, 100);

		}

		
	}
})();