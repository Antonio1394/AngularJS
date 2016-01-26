angular.module("ToDoList",["LocalStorageModule"])
.service('ToDoService', function(localStorageService){


	this.key="angular-todolist";
	if(localStorageService.get(this.key)){
		this.activities=localStorageService.get(this.key);

	}else{
		this.activities=[];
	}

	this.add=function(newActv){
		this.activities.push(newActv);
		this.updaLocalStorage();
	};
	this.updaLocalStorage=function(){
		localStorageService.set(this.key,this.activities);
	};
	this.clean=function(){
		this.activities=[];
		this.updaLocalStorage();
		return this.getAll();
	};
	this.getAll=function(){
		return this.activities;
	};
	this.removeitem=function(item){
		this.activities=this.activities.filter(function(activty){
			return activty !== item;
		});
		this.updaLocalStorage();
		return this.getAll();
	}
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
