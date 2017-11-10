var app = angular.module("myApp",['ngRoute','ngResource','ui.materialize']);

app.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider){
		$routeProvider
		.when('/',{
			templateUrl:'./view/home.html',
			controller:'home.ctrl'
        })
        .when('/city',{
            templateUrl:'./view/city.html',
            controller:'city.ctrl'
        })
        .when('/map',{
            templateUrl:'./view/map.html',
            controller:'map.ctrl'
        })
        .when('/zip',{
            templateUrl:'./view/poste.html',
            controller:'zip.ctrl'
        })
		.otherwise({
			redirectTo:'/'
		});
}]);

app.config(['$resourceProvider',function($resourceProvider){
	$resourceProvider.defaults.stripTrailingSlashes = false;
}])