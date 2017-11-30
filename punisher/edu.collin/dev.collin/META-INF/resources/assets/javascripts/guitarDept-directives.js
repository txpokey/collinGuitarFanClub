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
            templateUrl: "../html/directives/bio/teacher-biography.html",
            controller: function() {
                var NO_TAB_ACTIVE = -1 ;
                this.tab = NO_TAB_ACTIVE ;
                this.activeTab = this.tab ;

                this.privateSetTab = function(newTabID) {
                    return this.activeTab = this.tab = newTabID ;
                };
                this.tabReset = function() {
                    return this.privateSetTab( NO_TAB_ACTIVE );
                };
                this.showTab = function(checkTab) {
                    return ( this.isSet(checkTab) || this.tab === NO_TAB_ACTIVE ) ;
                };
                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };
                this.setTab = function(candidateTab) {
                    this.privateSetTab( this.isSet( candidateTab ) ? this.tabReset() : candidateTab );
                };
            },
            controllerAs: "tab"
        };
    });
    app.directive("guitarEvents", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/calendar/guitar-events.html"
        };
    });
    app.directive("guitarCoursesBySchoolTerm", function() {
        return {
            restrict: 'E',
            scope: {
                requestedSchoolSemester: '@semester', requestedSchoolYear: '@year'
            },
            templateUrl: "../html/directives/calendar/guitarCourses-bySchoolTerm.html",

            controller: function() {
                var NO_COURSE_YET = { } ;
                var ctx = this ;
                ctx.coursePick = NO_COURSE_YET ;
                ctx.getCoursePick = function() {
                    return ctx.coursePick ;
                };
                ctx.setCoursePick = function(catalogController,coursePicked) {
                    ctx.coursePick.coursePicked = coursePicked;
                    // MAK - make sure you change "active": "SR" to "active": true in the JSON data
                    ctx.coursePick.filterBy = { active: true , Subj : coursePicked.discipline , Crse : coursePicked.class };
                    ctx.coursePick.controller = catalogController ;
                    ctx.coursePick.catalogLabel = catalogController.guitarProgramCatalogBySection[0].payload[0] ;
                };
                ctx.getCatalogLabel = function() {
                    return ctx.getCoursePick().catalogLabel;
                };
                ctx.getController = function(){
                    return ctx.getCoursePick().controller;
                };
            },
            controllerAs: "ctx"
        };
    });
    app.directive("guitarLinks", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/links/guitar-links.html"
        };
    });
    app.directive("guitarNews", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/calendar/guitar-news.html",
            controller: function() {
                var NO_TAB_ACTIVE = -1 ;
                this.tab = NO_TAB_ACTIVE ;
                this.activeTab = this.tab ;

                this.privateSetTab = function(newTabID) {
                    return this.activeTab = this.tab = newTabID ;
                };
                this.tabReset = function() {
                    return this.privateSetTab( NO_TAB_ACTIVE );
                };
                this.showTab = function(checkTab) {
                    return ( this.isSet(checkTab) || this.tab === NO_TAB_ACTIVE ) ;
                };
                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };
                this.setTab = function(candidateTab) {
                    this.privateSetTab( this.isSet( candidateTab ) ? this.tabReset() : candidateTab );
                };
            },
            controllerAs: "tab"
        };
    });
    app.directive("guitarTextbooks", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/misc/guitar-textbooks.html",
            controller: function() {
                var TABBER = this ;

                TABBER.privateNoActiveTabConstant = function(){
                    var NO_TAB_ACTIVE_CONSTANT = -1 ;
                    return NO_TAB_ACTIVE_CONSTANT ;
                };
                var activeTab = TABBER.privateNoActiveTabConstant() ;
                TABBER.getTab = function () {
                    return activeTab;
                };
                TABBER.privateSetTab = function(newTabID) {
                    activeTab = newTabID ;
                    return TABBER.getTab() ;
                };

                TABBER.tabReset = function() {
                    TABBER.privateSetTab( TABBER.privateNoActiveTabConstant() );
                    return TABBER.getTab() ;
                };
                TABBER.showTab = function(candidateTab) {
                    // var currentTab = TABBER.getTab() ;
                    return (TABBER.privateNoActiveTabConstant() === TABBER.getTab()) || TABBER.isTabSet(candidateTab) ;
                };
                TABBER.isTabSet = function(checkTab) {
                    // var currentTab = TABBER.getTab() ;
                    return TABBER.getTab() === checkTab;
                };
                TABBER.setTab = function(candidateTab) {
                    TABBER.privateSetTab( TABBER.isTabSet( candidateTab ) ? TABBER.tabReset() : candidateTab );
                };

            },
            controllerAs: "textbookTab"
        };
    });
    app.directive("guitarPerformances", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/misc/guitar-performances.html",
            controller: function() {
                var NO_PLAYLIST_YET = { } ;
                var ctx = this ;
                ctx.playlistPick = NO_PLAYLIST_YET ;
                ctx.getPlaylistPick = function() {
                    return ctx.playlistPick ;
                };
                ctx.setPlaylistPick = function(performanceController,guitarPerformanceLabels,playlistPicked) {
                    ctx.playlistPick.playlistPicked = playlistPicked;
                    // ctx.playlistPick.catalog = catalog;
                    ctx.playlistPick.filterBy = { playlistId: playlistPicked.id } ;
                    ctx.playlistPick.SC = playlistPicked.id ;

                    ctx.playlistPick.controller = performanceController ;
                    ctx.playlistPick.performanceLabels = guitarPerformanceLabels ;
                };
                ctx.getPerformanceLabels = function() {
                    return ctx.getPlaylistPick().performanceLabels;
                };
                ctx.getController = function(){
                    return ctx.getPlaylistPick().controller;
                };
            },
            controllerAs: "ctx"
        };
    });
    app.directive("guitarFooter", function() {
        return {
            restrict: 'E',
            templateUrl: "../html/directives/headers/guitar-footer.html",
            controller: function() {
                var EMPTY_URL = '#0' ;

                this.hasIcon = function(candidateLink) {
                    return  EMPTY_URL !== candidateLink.icon ;
                };
                this.hasLogo = function(candidateLink) {
                    return  EMPTY_URL !== candidateLink.logo ;
                };

            },
            controllerAs: "foothelper"
        };
    });
})();