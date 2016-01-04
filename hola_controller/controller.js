angular.module("MyFirstApp",[])
.controller("FirstController",["$scope",function(m){
	m.nombre="Antonio";
	m.nuevoComentario={};
	m.comentarios=[
		{
			comentario: "Buen Tutorial",
			username:"codigofacilito"
		},
		{
			comentario:"malisimo tutorial",
			username:"otro_usuario"
		}
	];
	m.agregarComentario=function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario={};
	}
}]);