angular.module("lotrApp")

    .controller("wikiaController", function($scope, wikiaService){

        $scope.getData = function(){
            wikiaService.getArticleData().then(function(data){
                $scope.data = data;
            });
        }
        
    });