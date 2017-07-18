(function() {
    var app = angular.module('guitarDept', ['guitarDept-directives']);

    app.controller('HeaderController', [ '$http' , function($http){
        var header = this;
        header.targets = [];
        $http.get('../json/header-controller.json').success(function(data){
            header.targets = data;
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