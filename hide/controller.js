angular.module("MyFirstApp",[])
	.controller("FirstController",function($scope,$http){
		$scope.posts=[];
		$scope.loading=false;
		$http.get("http://jsonplaceholder.typicode.com/posts")
			.success(function(data){
				console.log(data);
				$scope.posts=data;
			})
			.error(function(err){

			});
	
	});