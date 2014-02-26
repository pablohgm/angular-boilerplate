define([
    'angular',
    'angularBootstrap',
    'angularUIRouter',
    'angularUIUtils',
    'plusOne',
    'lodash',
    'angularLocalStorage',
    './notifications/index',
    './home/index',
    './about/index',
    './user/index'
], function (ng) {
    'use strict';

    var module = ng.module('app', [
        'app.notifications',
        'app.home',
        'app.about',
        'app.user',
        'ui.bootstrap',
        'ui.router'
    ]);

    module.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
    });

    module.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | Angular-Enterprise-Kickstart' ;
            }
        });
    });

    return module;
});