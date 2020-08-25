(function(){
'use strict';
angular.module('namecalc',[])

.controller('calcont',function($scope)
{ $scope.name="";
    $scope.total=0;

    $scope.dispnum = function(){
        var totalname = 
        calculator($scope.name);
        $scope.total=totalname;
    };

    function calculator(string){
        var totalstring=0;
        for ( var i=0;i<string.length;i++){
            totalstring+=string.charCodeAt(i);

        }
        return totalstring;
    }

});

})();