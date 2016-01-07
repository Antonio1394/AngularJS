angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo=localStorageService.get("angular-todolist");	
	}else{
		$scope.todo=[];
	}
	
	/*
		{
			description: 'Terminar el curso de Angular',
			Fecha:'3-03-15 2:00'
		}
	*/

	$scope.addActv=function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv={};
		localStorageService.set("angular-todolist",$scope.todo);
	}

	$scope.cleanActv=function(){
		$scope.todo=[];
		localStorageService.set("angular-todolist",$scope.todo);
	}
});