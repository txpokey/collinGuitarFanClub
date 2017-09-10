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
            header.targets = response.data.targets;
            header.title = response.data.title;
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
    app.controller('GuitarEventsController', [ '$http' , function($http){
        var eventsController = this;
        eventsController.guitarProgramEvents = [];
        $http.get('../json/guitarEvents-controller.json').then(function (response) {
            eventsController.guitarProgramEvents = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarCoursesBySchoolTermController', [ '$http' , function($http){
        var catalogController = this;
        catalogController.guitarProgramCatalog = [];
        $http.get('../json/courseWare/2017/fall/current/musicCourses.json').then(function (response) {
            catalogController.guitarProgramCatalog = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
        catalogController.guitarProgramCatalogBySection = [];
        $http.get('../json/courseWare/2017/fall/current/musicCoursesBySection.json').then(function (response) {
            catalogController.guitarProgramCatalogBySection = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);

    app.controller('GuitarLinksController', [ '$http' , function($http){
        var linksController = this;
        linksController.guitarProgramLinks = [];
        $http.get('../json/links-controller.json').then(function (response) {
            linksController.guitarProgramLinks = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarNewsController', [ '$http' , function($http){
        var newsController = this;
        newsController.guitarProgramNews = [];
        $http.get('../json/news-controller.json').then(function (response) {
            newsController.guitarProgramNews = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarTextbooksController', [ '$http' , function($http){
        var textbooksController = this;
        textbooksController.textbooks = [];
        $http.get('../json/textbooks-controller.json').then(function (response) {
            textbooksController.textbooks = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarFooterController', [ '$http' , function($http){
        var footerController = this;
        footerController.guitarProgramFooter = [];
        $http.get('../json/footer-controller.json').then(function (response) {
            footerController.guitarProgramFooter = response.data;
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
