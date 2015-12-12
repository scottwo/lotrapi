angular.module("lotrApp", ["ui.router"])

    .config(function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/');
    
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "Views/homeView.html",
                controller: "homeCtrl"
            })
            .state('docs', {
                url: "/documentation",
                templateUrl: "Views/docsView.html",
                controller: "docsCtrl"
            })
            .state('about', {
                url: "/aboutme",
                templateUrl: "Views/aboutView.html",
                controller: "aboutCtrl"
            })
    });