(function() {
	'use strict';

	angular.module("myApp")
	.service("blogService", blogService);
	
	blogService.$inject = ['$http']; 
	
	function blogService($http) {
		
		function post(article){
			alert("in service post"); 
			var url = ""; 
			if(getCoordinates()){
				url = CONSTANTS.REVERSE_GEOLOCATION_BEGINNING + sv.lat + ',' + sv.lng + CONSTANTS.REVERSE_GEOLOCATION_ENDING; 
			} 
			
			return $http.get(url)
	        .then(dataObtained)
	        .catch(dataFailed);
			
	        function dataObtained(response) {       	
	        	return response.data; 
	        }
	        function dataFailed(error) {
	        	console.log('Post data failed.' + error.data);
	        }
		}

	}
})();