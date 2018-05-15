angular.module("angular-page", []);

angular.module("angular-page").controller("teamctrl", function ($scope){

	$scope.team = [
		{image: 'images/team1.jpg', name: 'Amanda Xavier', job: 'Designer'},
		{image: 'images/team2.jpg', name: 'Carlos Duarte', job: 'Web Developer'},
		{image: 'images/team3.jpg', name: 'Debora Nunes', job: 'Marketing'},
		{image: 'images/team4.jpg', name: 'Gabriela Castro', job: 'Developer'}
	];
});

angular.module("angular-page").controller("servicesctrl", function ($scope){

	$scope.services = [
		{icon: 'fa fa-shopping-cart',title: 'E-Commerce', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
		{icon: 'fa fa-laptop', title: 'Responsive Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
		{icon: 'fa fa-lock', title: 'Web Security', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
	];
});