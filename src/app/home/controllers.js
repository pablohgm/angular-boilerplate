define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'HomeCtrl', function HomeController( $scope ) {
        console.log("HomeCtrl init....");
    });

});