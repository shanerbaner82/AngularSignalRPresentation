var myApp = angular.module('myApp',[]);
myApp.value('$', $);

myApp.config(function ($routeProvider){
	$routeProvider.
	when("/",{templateUrl:"partials/home.html", controller:"SignalRAngularCtrl"}).
	when("/next", {templateUrl:"partials/next.html", controller:"SignalRAngularCtrl"})
	})