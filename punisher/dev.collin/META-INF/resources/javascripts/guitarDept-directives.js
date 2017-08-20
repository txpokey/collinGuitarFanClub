(function(){
    var app = angular.module('guitarDept-directives', []);

    app.directive("headerCarousel", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/headers/header-carousel.html"
        };
    });
    app.directive("headerNavbar", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/headers/header-navbar.html"
        };
    });
    app.directive("headerGuitar", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/headers/header-guitar.html"
        };
    });
    app.directive("teacherBiography", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/bio/teacher-biography.html"
        };
    });
    app.directive("guitarEvents", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/calendar/guitar-events.html"
        };
    });
    app.directive("guitarLinks", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/links/guitar-links.html"
        };
    });
    //
    // app.directive("productReviews", function() {
    //     return {
    //         restrict: 'E',
    //         templateUrl: "../html/product-reviews.html"
    //     };
    // });
    //
    // app.directive("productSpecs", function() {
    //     return {
    //         restrict:"A",
    //         templateUrl: "../html/product-specs.html"
    //     };
    // });
    //
    // app.directive("productTabs", function() {
    //     return {
    //         restrict: "E",
    //         templateUrl: "../html/product-tabs.html",
    //         controller: function() {
    //             this.tab = 1;
    //
    //             this.isSet = function(checkTab) {
    //                 return this.tab === checkTab;
    //             };
    //
    //             this.setTab = function(activeTab) {
    //                 this.tab = activeTab;
    //             };
    //         },
    //         controllerAs: "tab"
    //     };
    // });
    //
    // app.directive("productGallery", function() {
    //     return {
    //         restrict: "E",
    //         templateUrl: "../html/product-gallery.html",
    //         controller: function() {
    //             this.current = 0;
    //             this.setCurrent = function(imageNumber){
    //                 this.current = imageNumber || 0;
    //             };
    //         },
    //         controllerAs: "gallery"
    //     };
    // });
})();