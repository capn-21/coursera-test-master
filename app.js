(function(){
    'use strict'
angular.module('firstapp',[])

.controller('firstcontroller',function($scope){
    $scope.fname="omkar";
    $scope.sayhello= function(){
        return "haloooo";
    };

});
   

})();