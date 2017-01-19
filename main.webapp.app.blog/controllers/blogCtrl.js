(function() {
	'use strict';

	angular.module("myApp")
	.controller("blogCtrl", blogCtrl);
	
	// blogCtrl.$inject['blogService'];
	
	function blogCtrl() {
		var vm = this;
		vm.readPosts = readPosts;
		vm.post = post; 
		vm.addArticleToDatabase = addArticleToDatabase; 
		vm.getArticlesFromDatabase = getArticlesFromDatabase; 
		vm.posts = []; 
		var i = 0; 
		
		function readPosts() {
			getArticlesFromDatabase(); 
		}
		
		function post(article, name) {
			if(article == ""){
				alert("you have to type something"); 
			}else{
				vm.posts.push( {article: article, 'name': name});
				addArticleToDatabase(article, name); 
				$(".textArea").val(""); 
				$(".writerName").val(""); 			
				article = ""; 
				name = ""; 
//				alert('in post ' + article); 
			}
			
//			blogService.post(article); 
			
		}
		function addArticleToDatabase(article, name) {
//			This is the JS Code to call a php function
			$.ajax({
                      url: 'main.webapp.app.blog/php/addSQLData.php',
                      data: {'article': article, 'name': name},
                      success: function(data)
                      {
                    	  alert("in success"); 
                      } ,
                      error: function()
                      {
                    	  alert("in error"); 
                          $('#output').html("Error");
                      }
            }); 
		}
		function getArticlesFromDatabase() {
			$.ajax({
                      url: 'main.webapp.app.blog/php/getSQLData.php',
                      success: function(data)
                      { 
                    	  vm.posts = []; 
                    	  data = data.trim();                    	  
	                    	  for(var i = 0; i < data.length; i++){ 
	                    		  if(i == 0)
	                    			  var index1A = data.indexOf("/", i ) + 1; 
	                    		  else
	                    			  var index1A = i; 	                    		  
	                    		  var index1B = data.indexOf("/", index1A );

	                    		  var name = data.substring(index1A, index1B); 

	                    		  var index2A = index1B + 1;  
	                    		  var index2B = data.indexOf("/", index2A); 

	                    		  var post = data.substring(index2A, index2B);

	                    		  var index3A = index2B + 1; 
	                    		  var index3B = data.indexOf("/", index3A); 

	                    		  var user = data.substring(index3A, index3B);
	               	                    		 
	                    		  vm.posts.push({Name: name, Post: post, User: user}); 
	                    		  i = index3B; 
	                    	  }            	  
                      } ,
                      error: function()
                      {
                    	  alert("in error");                         
                      }
            }); 
		}
		
	}
})();