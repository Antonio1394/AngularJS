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
		return toDoService.getAll();
	}
	toDoService.getAll=function(){
		return toDoService.activities;
	}
	toDoService.removeitem=function(item){
		toDoService.activities=toDoService.activities.filter(function(activty){
			return activty !== item;
		});
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	}
	return toDoService;
})
.controller("ToDoController",function($scope,ToDoService){
	
	$scope.todo=ToDoService.getAll();
	$scope.newActv={};

	$scope.addActv=function(){
		ToDoService.add($scope.newActv);
		$scope.newActv={};	
	}
	$scope.removeAct=function(item){
		$scope.todo=ToDoService.removeitem(item);
	}
	$scope.clean=function(){
		ToDoService.clean();
	}
	
});