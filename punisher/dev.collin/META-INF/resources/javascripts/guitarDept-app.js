(function() {
    var app = angular.module('guitarDept', ['guitarDept-directives', 'ngAnimate', 'ngSanitize']);
    app.config(function($sceDelegateProvider) {
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
//
        header.musicDepartmentURL = new Object();
        header.musicDepartmentURL.fernand = "/html/bio/fernand/FVera_Bio.html";
        header.musicDepartmentURL.olga    = "/html/bio/olga/index.html";
        var fv = {
           name : 'fernand' , url : header.musicDepartmentURL.fernand
        } ;
        var ov = {
           name : 'olga'   , url : header.musicDepartmentURL.olga
        } ;
        header.musicDepartmentURL.ALL = [ fv , ov ] ;
        header.musicDepartmentURL.fv = fv ;
        header.musicDepartmentURL.ov = ov ;
//
        header.targets = [];
        $http.get('../json/header-controller.json').then(function(response){
            header.targets = response.data;
        },function (badResult){
            console.log(badResult)
        }) ;
    }]);
    console.log("running outside of controller");

    // app.controller('ReviewController', function() {
    //     this.review = {};
    //
    //     this.addReview = function(product) {
    //         product.reviews.push(this.review);
    //
    //         this.review = {};
    //     };
    // });
})();