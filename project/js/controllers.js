angular.module("FinalApp")
.controller("MainController", function($scope, $resource,PostResource){
    User=$resource('http://jsonplaceholder.typicode.com/users/:id',{id:'@id'});
    $scope.posts=PostResource.query();
    $scope.users=User.query();
    $scope.removePost=function(post){
    	PostResource.delete({id: post.id},function(data){
    	});
    	$scope.posts=$scope.posts.filter(function(element){
    		return element.id !==post.id;
    	});
    }
    //Query Get/posts-> un arreglo de posts
})
.controller("PostController",function($scope,PostResource, $routeParams){
    $scope.post=PostResource.get({id: $routeParams.id});
})

.controller("NewPostController",function($scope,PostResource){
    $scope.post={};
    $scope.title="Crear Post";
    $scope.savePost=function(){
    	PostResource.save({data: $scope.post},function(data){
    		console.log(data);
    	});
    }
});