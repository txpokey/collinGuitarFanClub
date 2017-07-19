(function() {
    var app = angular.module('guitarDept', ['guitarDept-directives', 'ngAnimate']);

    app.controller('HeaderController', [ '$http' , function($http){
        var header = this;
        header.targets = [];
        $http.get('../json/header-controller.json').then(function(response){
            header.targets = response.data;
        },function (badResult){
            console.log(badResult)
        }) ;
    }]);

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