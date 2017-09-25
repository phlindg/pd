
var app = angular.module("app", [ "ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		/*.when("/awd",{
			redirectTo: "/"
		})
		.when("/team",{
			templateUrl: "templates/team.html"
		})
		.when("/events",{
			templateUrl: "templates/events.html"
		})
		.when("/students",{
			templateUrl: "templates/students.html"
			//console.log("AWDWAD")
		})
		.when("/companies",{
			templateUrl: "templates/companies.html"
		})
		.when("/",{
			templateUrl: "templates/main.html"
		})
		.when("/portfolioModal:[0-9]*",{
			//template: "aWDAWD"
			templateUrl: "templates/modals/modal1.html"
		})*/
		
		.state("home",{
			url: "/",
			templateUrl: "templates/main.html"
		})
		.state("team",{
			url: "/team",
			templateUrl: "templates/team.html"
		})
		.state("events",{
			url: "/events",
			templateUrl: "templates/events.html"
		})
		.state("modal",{
			url: "/{portfolioModal:[0-9]*}",
			templateUrl: "templates/events.html"
		})
		.state("students",{
			url: "/students",
			templateUrl: "templates/students.html"
		})
		.state("companies",{
			url: "/companies",
			templateUrl: "templates/companies.html"
		})

		$urlRouterProvider.otherwise("")
});
app.run(function($rootScope){
	$rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
});
})

