(function() {
	'use strict';

	angular.module("myApp")
	.controller("blogCtrl", blogCtrl);
	
	blogCtrl.$inject['blogService']; 
	
	function blogCtrl(blogService) {
		var vm = this;
		vm.readPosts = readPosts;
		vm.post = post; 
		vm.addArticleToDatabase = addArticleToDatabase; 
		vm.getArticlesFromDatabase = getArticlesFromDatabase; 
		vm.posts = []; 
		var i = 0; 
		
		function readPosts() {
//			alert("in read"); 
			getArticlesFromDatabase(); 
			alert("in read " + JSON.stringify(vm.posts.length)); 
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
//                      dataType: 'json'
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
                    	  vm.posts.push({Name: <?php echo $allPosts ?>}); 
//	                    	  for(var i = 0; i < data.length; i++){
////	                    		  document.write(vm.posts.Name);  
	                    		  document.write(JSON.stringify(vm.posts)); 
//	                    	  }
//                    	 i++; 
//                    	 alert(i); 
                    	  
                    	 
                    	                     	  
                      } ,
                      error: function()
                      {
                    	  alert("in error");                         
                      }
            }); 
		}
		
	}
})();