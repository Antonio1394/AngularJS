angular.module("FinalApp", ["ngResource"])
.controller("MainController", function($scope, $resource){
    Post=$resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'});
    $scope.posts=Post.query();
    //Query Get/posts-> un arreglo de posts
    /*Estás?? sii Ya no muestra el error, ¿qué más tenía que hacer la página?
    ps fijate q solo
    mostrar los post q vienen. pero cual era el error
    q tenia o q onda
    el orden de los archivos*/
});