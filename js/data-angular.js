angular.module("angular-page", []);

angular.module("angular-page").controller("teamctrl", function ($scope){

	$scope.team = [
		{image: 'images/team1.jpg', name: 'Amanda Xavier', job: 'Designer'},
		{image: 'images/team2.jpg', name: 'Carlos Duarte', job: 'Web Developer'},
		{image: 'images/team3.jpg', name: 'Debora Nunes', job: 'Marketing'},
		{image: 'images/team4.jpg', name: 'Gabriela Castro', job: 'Developer'}
	];

})