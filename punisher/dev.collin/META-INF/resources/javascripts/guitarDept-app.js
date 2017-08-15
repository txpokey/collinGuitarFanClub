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
    app.controller('TeacherBiographyController', [ '$http' , function($http){
        var bioController = this;
        bioController.guitarDepartmentFaculty = [];
        $http.get('../json/teacherBiography-controller.json').then(function (response) {
            bioController.guitarDepartmentFaculty = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
})();

// bioController.guitarDepartmentFaculty = [
//     {
//         name : 'Dr. Fernand Vera' ,
//         url : "/html/bio/fernand/FVera_Bio.html"
//     } , {
//         name : 'Dr. Olga Amelkina-Vera'    ,
//         url : "/html/bio/olga/index.html"
//     }
