var myApp = angular.module('myApp',[]);

myApp.controller('myController',function($scope){
	console.log('Ziaur Rahman');

	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = '';

	//Predefined
	$scope.users = [
		{name:'Ziaur Rahman',email:'zia.1993.rahman@gmail.com'},
		{name:'bindu',email:'bindu1091@gmail.com'},
		{name:'imran',email:'shahriar.kabir@gmail.com'},
		{name:'marzan',email:'naziba.marzan@gmail.com'},
		{name:'sumon',email:'gm.bellalhossain@gmail.com'}
	];

	//Adding New user
	$scope.saveUser = function(){
		//console.log($scope.newUser);
		//Pushing new user
		$scope.users.push($scope.newUser);
		//Set a message
		$scope.message = 'New User Created !';
		//After push emty the array for new instance
		$scope.newUser = {};
	};

	//Editing User
	//Getting the specific user
	$scope.selectUser = function(user){
		//console.log(user);
		$scope.clickedUser = user;

	};
	//Updating user -- if back end presents
	$scope.updateUser = function(){
		$scope.message = 'User Updated !';
	};

	//Deleting user
	$scope.deleteUser = function(){
		$scope.message = 'User Deleted !';
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	}

	//Clear Messages
	$scope.clearMessage = function(){
		$scope.message = '';
	};
});