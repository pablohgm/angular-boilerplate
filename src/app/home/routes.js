define(['angular', './module', './controllers'], function (ng, module, controllers) {
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
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    });

});