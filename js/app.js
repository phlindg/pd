
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
			url: "/events/{portfolioModal:[0-9]*}",
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
		.state("evaluation",{
			url: "/evaluation",
			template: '<iframe class="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSelNUWG8RiIuJ_8Z_AtFRvJUzjjkk_gHJ-PIs6Cz_ejqjEHNw/viewform?embedded=true" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0">Läser in...</iframe>'
		})
		$urlRouterProvider.when("","/");
		$urlRouterProvider.otherwise("");
});
app.run(function($rootScope){
	$rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
});
})

