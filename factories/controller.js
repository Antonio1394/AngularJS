angular.module("ToDoList",["LocalStorageModule"])
.factory('ToDoService', function(localStorageService){
	var toDoService={};

	toDoService.key="angular-todolist";
	if(localStorageService.get()){toDoService.key
		toDoService.activities=localStorageService.get(toDoService.key);	
	}else{
		toDoService.activities=[];
	}
	
	toDoService.add=function(newActv){
		toDoService.activities.push(newActv);
		toDoService.updaLocalStorage();
	};
	toDoService.updaLocalStorage=function(){
		localStorageService.set(toDoService.key,toDoService.activities);
	};
	toDoService.clean=function(){
		toDoService.activities=[];
		toDoService.updaLocalStorage();
	}
	toDoService.getAll=function(){
		return toDoService.activities;
	}
	toDoService.removeitem=function(item){
		toDoService.activities=toDoService.activities.filter(function(activty){
			return activty !== item;
		});
		toDoService.updaLocalStorage();
	}
	return toDoService;
})
.controller("ToDoController",function($scope){
		
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