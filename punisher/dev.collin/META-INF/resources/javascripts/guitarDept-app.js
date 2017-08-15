(function() {
    var app = angular.module('guitarDept', ['guitarDept-directives', 'ngAnimate', 'ngSanitize']);
    app.config(function($sceDelegateProvider) { // needs 'ngSanitize' : but does not work because of CORS rules anyway
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            // 'http://srv*.assets.example.com/**'
            'https://www.collin.edu/department/music/**'
        ]);
    });

        app.controller('HeaderController', [ '$http' , function($http){
        var header = this;
        header.carouselSlideDeck = [0,1,2];
        header.targets = [];
        $http.get('../json/header-controller.json').then(function(response){
            header.targets = response.data;
        },function (badResult){
            console.log(badResult)
        }) ;
    }]);
    // console.log("running outside of controller");
    app.controller('BioController', [ '$http' , function($http){
        var bioController = this;
        bioController.guitarDepartmentFaculty = new Object();
        var fv = {
            name : 'fernand' , url : bioController.guitarDepartmentFaculty.fernand = "/html/bio/fernand/FVera_Bio.html"
        } ;
        var ov = {
            name : 'olga'    , url : bioController.guitarDepartmentFaculty.olga    = "/html/bio/olga/index.html"
    } ;
        bioController.guitarDepartmentFaculty.ALL = [ fv , ov ] ;
    }]);
})();