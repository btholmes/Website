(function(){
	'use strict';
	
	angular.module("myApp" )
	.controller("loginCtrl",loginCtrl);  
			
	loginCtrl.$inject = ['$state']; 
	
	function loginCtrl($state){
		
		var vm = this; 
		vm.allUsers = []; 
		vm.userPosition = -1; 
		vm.userExists = false; 
		vm.emailExists = false; 
		vm.userDNE = true; 
		vm.emailDNE = false; 
		vm.passDNE = true; 
		vm.inValidUser = true; 
		vm.inValidEmail = true; 
		vm.addUser = addUser; 
		vm.oldUser = oldUser; 
		vm.verifyUser = verifyUser; 
		vm.verifyEmail = verifyEmail;
		vm.matchPasswords = matchPasswords; 
		vm.confirmUser = confirmUser; 
		vm.confirmPass = confirmPass; 
		vm.exitBox = exitBox; 
		
		$('.navbar').addClass('disabled'); 
		
		function addUser(){
			if(vm.username == undefined || vm.email == undefined || vm.password == undefined){
				return; 
			}
			
			vm.allUsers = JSON.parse(localStorage.getItem('users'));
			vm.passedTests = true; 
		
			vm.verifyUser(); 
			vm.verifyEmail(); 
			vm.matchPasswords(); 
			
			if(vm.passedTests == true)
			{ 
				vm.allUsers.push({user: vm.username , email: vm.email , pass: vm.password });  
				localStorage.setItem('users', JSON.stringify(vm.allUsers)); 
				$state.go('home'); 
				$('.navbar').removeClass('disabled'); 
			}

		}
		
		function oldUser() {
			if(vm.username == undefined || vm.password == undefined){
				return; 
			}
			vm.allUsers = JSON.parse(localStorage.getItem('users'));

			vm.passedTests = true; 
			vm.confirmPass(); 
			vm.confirmUser(); 
			
			if(!vm.userDNE && !vm.passDNE){
				vm.allUsers.push({user: vm.username , email: vm.email , pass: vm.password });
				localStorage.setItem('users', JSON.stringify(vm.allUsers)); 	
				$state.go('home'); 
				$('.navbar').removeClass('disabled'); 

			}
			
		}
		
		function verifyUser() {
			
//			if(vm.username == undefined || vm.username == ""){
//				vm.inValidUser = true; 
//				vm.passedTests = false; 
//			}
			
				var user = new RegExp("^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$"); 
				if (user.test(vm.username)){
					vm.inValidUser = false;  
				}
				else{
					vm.inValidUser = true; 
					vm.passedTests = false; 
				}
				if(vm.allUsers != null){
					for(var i = 0; i < vm.allUsers.length; i++){
						if(vm.allUsers[i].user == vm.username){
							vm.userExists = true; 
							vm.passedTests = false;
						}
					}
				}
			
			
		}
		
		function verifyEmail() {
			var email = new RegExp("^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$"); 
			if(email.test(vm.email)){
				vm.inValidEmail = false; 
			}
			else{
				vm.inValidEmail = true; 
				vm.passedTests = false; 
			}
			if(vm.allUsers != null){
				for(var i = 0; i < vm.allUsers.length; i++){
					if(vm.allUsers[i].email == vm.email){
						vm.emailExists = true; 
						vm.emailDNE = false; 
						vm.passedTests = false;
					}
				}
			}
		}
		

		function matchPasswords() {
			if(vm.password == vm.confirmationPass)
			{
				vm.passMisMatch = false;  
				
			}
			else{
				vm.passMisMatch = true; 
				vm.passedTests = false; 
			}
		
		}
		
		function confirmUser(){
			if(vm.allUsers.length != null){
				for(var i = 0; i < vm.allUsers.length; i++){
					if(vm.allUsers[i].user == vm.username){
						vm.userDNE = false; 
						vm.inValidUser = false; 
						vm.userPosition = i; 
					}
				}
			}
			else{
				vm.userDNE = false; 
			}
			

		}
		
		function confirmPass() {
			if(vm.allUsers.length > 0){
				for(var i = 0; i < vm.allUsers.length; i++){
					if(vm.allUsers[i].pass == vm.password){
						vm.passDNE = false; 
					}
				}
			}
			else{
				vm.passDNE = true; 
			}
		}
		
		function exitBox() {
			$('.navbar').removeClass('disabled'); 
			$state.go('home'); 
		}
		
		    $('#login-form-link').click(function(e) {
		    
				$("#login-form").delay(100).fadeIn(100);
		 		$("#register-form").fadeOut(100);
				$('#register-form-link').removeClass('active');
				$('#login-form-link').addClass('active');
				e.preventDefault();
			});
			$('#register-form-link').click(function(e) {
			
				$("#register-form").delay(100).fadeIn(100);
		 		$("#login-form").fadeOut(100);
				$('#login-form-link').removeClass('active');
				$(this).addClass('active');
				e.preventDefault();
			});
	}

})(); 
