angular.module("lotrApp")

    .service("wikiaService", function($http, $q){
        this.getArticleData = function(){
            var dfd = $q.defer();
            $http({
                method: "GET",
                url: "http://lotr.wikia.com/api/v1/Articles/Top?expand=1&limit=100&callback=?",
                withCredentials: true,
                headers: {
                    "X-Wikia-API-Key" : ""
                }
            }).then(function(res){
                dfd.resolve(res.data)
            })
            return dfd.promise;
        };
    });