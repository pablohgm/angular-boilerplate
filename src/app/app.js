define([
    'angular',
    'angularBootstrap',
    'angularUIRouter',
    'angularUIUtils',
    'plusOne',
    'lodash',
    './home/index',
    './about/index',
    './user/listUsers/index',
    './user/editUser/index'
], function (ng) {
    'use strict';

    var module = ng.module('app', [
        'app.home',
        'app.about',
        'app.user.listUsers',
        'app.user.user',
        'ui.bootstrap',
        'app.about',
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