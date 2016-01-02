angular.module("MyFirstApp",[])
.controller("FirstController",function($scope){
	$scope.nombre="Antonio";
	$scope.nuevoComentario={};
	$scope.comentarios=[
		{
			comentario: "Buen Tutorial",
			username:"codigofacilito"
		},
		{
			comentario:"malisimo tutorial",
			username:"otro_usuario"
		}
	];
	$scope.agregarComentario=function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario={};
	}
});