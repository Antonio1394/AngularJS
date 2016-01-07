angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
	$scope.todo=[];
	/*
		{
			description: 'Terminar el curso de Angular',
			Fecha:'3-03-15 2:00'
		}
	*/

	$scope.addActv=function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv={};
	}
});