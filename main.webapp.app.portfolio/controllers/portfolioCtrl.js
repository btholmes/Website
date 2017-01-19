(function(){
	'use strict';
	
	angular.module("myApp" )
	.controller("portfolioCtrl", portfolioCtrl);  
			
	portfolioCtrl.$inject = ['$state' , '$scope']; 
	
	function portfolioCtrl($state, $scope){
		var vm = this; 
		vm.name = "Portfolio Page"; 
		vm.items = [
						{name: "Calendar w/ Schedule", site: "true", href: "schedule", img: "images/calendarImage.png",
						description: "This was a simple calendar I made when I wanted to get the hang of " +
						"Angular still. It took about 2 days to finish.", tech: ["AngularJS"]

						},
						{name: "JS Game", site: "true", href: "game", img: "images/gameImage1.png",
						description: "This is a simple racing game I adapted off an idea I found on codepen.io.", tech: ["js"]

						},

						{name: "Google Maps Api", site: "true", href: "map", img: "images/MapImage.png",
						description: "I created this UI for the Google Maps API, just because I wanted to learn " +
						"more about the technology", tech: ["Google Maps API"]

						},

						{name: "Nomads", site: "false", href: "https://github.com/btholmes/Nomads/tree/master", img: "images/nomad.jpg",
						description: "(Git repository is being organized now.) It's a picture sharing app I made so that" +
                        " when my friends travel, they could share their pictures with me. Works with Android and IOS", tech: ["Ionic2", "Angular2", "Firebase3"]

						},

                        {name: "C++ Memory Game", site: "false", href: "https://github.com/btholmes/C-Memory-Game", img: "images/thankC.png",
                            description: "A memory game I made with C++ over Thanskgiving break", tech: ["C++"]

                        },

                        {name: "Java Mail", site: "false", href: "https://github.com/btholmes/JavaMailProgram", img: "images/jMail.png",
                            description: "A java program made with the jMail package. I used it with the Apache POI " +
                            "to count attendance records from Excel files, and send the results to a member of the " +
                            "Honor's board I was working with", tech: ["Java", "jMail", "Apache POI", "JavaFX", "Threading"]

                        },

                        {name: "Picture Game", site: "false", href: "#", img: "images/Comingsoon.png",
                            description: "Placeholder.. Working on this right now", tech: ["Android", "Firebase3", "Clarifai API"]

                        }

					];
 
	}

})(); 