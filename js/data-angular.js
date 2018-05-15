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
		{icon: 'fab fa-html5',title: 'HTML 5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
		{icon: 'fab fa-css3-alt',title: 'CSS 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
		{icon: 'fab fa-angular', title: 'Angular JS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
		{icon: 'fas fa-laptop', title: 'Responsive Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
	];
});

angular.module("angular-page").controller('portfolioctrl', function ($scope){

	$scope.portfolio = [
		{image: 'images/portfolio/portfolio1.jpg', title: 'Title Portfolio 1'},
		{image: 'images/portfolio/portfolio2.jpg', title: 'Title Portfolio 2'},
		{image: 'images/portfolio/portfolio3.jpg', title: 'Title Portfolio 3'},
		{image: 'images/portfolio/portfolio4.jpg', title: 'Title Portfolio 4'},
		{image: 'images/portfolio/portfolio5.jpg', title: 'Title Portfolio 5'},
		{image: 'images/portfolio/portfolio6.jpg', title: 'Title Portfolio 6'},
		{image: 'images/portfolio/portfolio7.jpg', title: 'Title Portfolio 7'},
		{image: 'images/portfolio/portfolio8.jpg', title: 'Title Portfolio 8'}
	];
});