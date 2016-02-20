angular.module("FinalApp")
.controller("MainController", function($scope, $resource){
    Post=$resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'});
    User=$resource('http://jsonplaceholder.typicode.com/users/:id',{id:'@id'});

    $scope.posts=Post.query();
    $scope.users=User.query();
    $scope.removePost=function(post){
    	Post.delete({id: post.id},function(data){
    	});
    	$scope.posts=$scope.posts.filter(function(element){
    		return element.id !==post.id;
    	});
    }
    //Query Get/posts-> un arreglo de posts
})
.controller("PostController",function($scope,$resource, $routeParams){
    Post=$resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'});
    $scope.post=Post.get({id: $routeParams.id});
})

.controller("NewPostController",function($scope,$resource){
    Post=$resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'});
    $scope.post={};
    $scope.SavePost=function(){
    }
});