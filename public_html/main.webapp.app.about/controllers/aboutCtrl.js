(function() {
	'use strict';

	angular.module("myApp")
	.controller("aboutCtrl", aboutCtrl);
	
	aboutCtrl.$inject = ['$timeout'];
	function aboutCtrl($timeout) {
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