angular.module("CustomDirective",[])
.directive("myAutocomplete",function(){
    function link(scope,elemet,attrs){
        $(elemet).autocomplete({
            source: scope[attrs.myAutocomplete],
            select: function(ev,ui){
              ev.preventDefault();
              if(ui.item){
                scope.optionSelected(ui.item.value);
              }
            },
            focus: function(ev,ui){
                ev.preventDefault();
                $(this).val(ui.item.label);
            }
        });
    };
    return{
      link:link
    };
})
.directive('backImg',function(){
    return function($scope,element,attrs){
        attrs.$observe('backImg',function(value){
          element.css({
              "background":"url("+value+")",
              "background-size":"cover",
              "background-position":"center"
          });
        });
    }
})
.controller("AppCtrl",function($scope,$http){
  
  $http.get("https://api.github.com/users/antonio1394/repos")
  .success(function(data){
      $scope.repos=data;
  })
  .error(function(err){
    console.log(err);
  });
});
