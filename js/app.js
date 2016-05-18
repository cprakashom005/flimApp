var movieApp = angular.module('filmApp',['ngRoute']);
movieApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{templateUrl: 'views/dashboard.html',controller: 'dashboard'})
	.when('/action',{templateUrl: 'views/action.html',controller: 'action'})
	.when('/crime',{templateUrl:'views/crime.html',controller: 'crime'})
	.when('/drama',{templateUrl:'views/drama.html',controller: 'drama'})
	.when('/mystery',{templateUrl:'views/mystery.html',controller: 'mystery'})
	.when('/sci',{templateUrl:'views/sci.html',controller: 'sci'})
	.when('/adventure',{templateUrl:'views/adventure.html',controller: 'adventure'})
	.when('/search',{templateUrl:'views/dashboard.html',controller: 'dashboard'})
	.otherwise({redirectTo:'/'});
}]);

movieApp.controller('searchCtrl', function($scope,$http,$location) {
  $scope.search = function(val) {
	var url = "http://www.omdbapi.com/?s=" + val;
		$scope.title = "Movies";
		$http.get(url).success(function(response){
			localStorage.setItem('defaultData', JSON.stringify(response));
			var retrievedObject = localStorage.getItem('defaultData');
			var obj = JSON.parse(retrievedObject);
			$scope.response = obj.Search;
		});
	};
});

movieApp.controller('dashboard',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=harry";
	$scope.title = "Movies";
	$http.get(url).success(function(response){
		localStorage.setItem('defaultData', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('defaultData');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
movieApp.controller('action',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=fast";
	$scope.title = "Action";
	$http.get(url).success(function(response){
		localStorage.setItem('action', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('action');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
movieApp.controller('crime',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=billa";
	$scope.title = "Crime";
	$http.get(url).success(function(response){
		localStorage.setItem('crime', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('crime');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
movieApp.controller('drama',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=shi";
	$scope.title = "Drama";
	$http.get(url).success(function(response){
		localStorage.setItem('drama', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('drama');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
movieApp.controller('mystery',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=mr";
	$scope.title = "Mystery";
	$http.get(url).success(function(response){
		localStorage.setItem('mystery', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('mystery');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
movieApp.controller('sci',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=science";
	$scope.title = "Science";
	$http.get(url).success(function(response){
		localStorage.setItem('sci', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('sci');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
movieApp.controller('adventure',function($scope,$http){
	var url = "http://www.omdbapi.com/?s=adventure";
	$scope.title = "Adventure";
	$http.get(url).success(function(response){
		localStorage.setItem('adventure', JSON.stringify(response));
		var retrievedObject = localStorage.getItem('adventure');
		var obj = JSON.parse(retrievedObject);
		$scope.response = obj.Search;
	});
});
