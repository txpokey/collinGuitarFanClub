(function() {
    var app = angular.module('guitarDept', ['guitarDept-directives', 'ngAnimate', 'ngSanitize','angular.filter']);
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
        $http.get('../assets/json/header-controller.json').then(function(response){
            header.targets = response.data.targets;
            header.title = response.data.title;
        },function (badResult){
            console.log(badResult)
        }) ;
    }]);
    app.controller('TeacherBiographyController', [ '$http' , function($http){
        var bioController = this;
        bioController.guitarDepartmentFaculty = [];
        $http.get('../assets/json/teacherBiography-controller.json').then(function (response) {
            bioController.guitarDepartmentFaculty = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarEventsController', [ '$http' , function($http){
        var eventsController = this;
        eventsController.guitarProgramEvents = [];
        $http.get('../assets/json/guitarEvents-controller.json').then(function (response) {
            eventsController.guitarProgramEvents = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarCoursesBySchoolTermController', [ '$http' , function($http){
        var catalogController = this;
        catalogController.guitarProgramCatalog = [];
        $http.get('../assets/json/courseWare/2018/spring/edu.collin.music.classList.json').then(function (response) {
            catalogController.guitarProgramCatalog = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
        catalogController.guitarProgramCatalogBySection = [];
        $http.get('../assets/json/courseWare/2018/spring/edu.collin.music.musicCoursesBySection.json').then(function (response) {
            catalogController.guitarProgramCatalogBySection = response.data[0].guitarProgramCatalog;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);

    app.controller('GuitarLinksController', [ '$http' , function($http){
        var linksController = this;
        linksController.guitarProgramLinks = [];
        $http.get('../assets/json/links-controller.json').then(function (response) {
            linksController.guitarProgramLinks = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarNewsController', [ '$http' , function($http){
        var newsController = this;
        newsController.guitarProgramNews = [];
        $http.get('../assets/json/news-controller.json').then(function (response) {
            newsController.guitarProgramNews = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarTextbooksController', [ '$http' , function($http){
        var textbooksController = this;
        textbooksController.textbooks = [];
        $http.get('../assets/json/textbooks-controller.json').then(function (response) {
            textbooksController.textbooks = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarPerformanceController', [ '$http' , function($http){
        var performanceController = this;
        performanceController.channelQuery = [];
        $http.get('../assets/json/you-tube.playlistsByChannel.query.json').then(function (response) {
            performanceController.channelQuery = response.data;
        }, function (badResult) {
            console.log(badResult)
        });
        $http.get('../assets/json/you-tube.playlist.query.json').then(function (response) {
            performanceController.playlistQuery = response.data;
            for (i =0 , q = performanceController.playlistQuery; i < q.length; i++) {
                q[i].playlistId = q[i].items[0].snippet.playlistId;
            }
        }, function (badResult) {
            console.log(badResult)
        });
    }]);
    app.controller('GuitarFooterController', [ '$http' , function($http){
        var footerController = this;
        footerController.guitarProgramFooter = [];
        $http.get('../assets/json/footer-controller.json').then(function (response) {
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
