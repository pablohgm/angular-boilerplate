define(['angular', './module', './controllers', './partials'], function (ng, module, controllers, partials) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.config(function config( $stateProvider ) {
        $stateProvider.state( 'home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: './src/app/home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    });

});