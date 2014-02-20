/**
 * Created with JetBrains PhpStorm.
 * User: Karenina
 * Date: 19/02/14
 * Time: 03:10 PM
 * To change this template use File | Settings | File Templates.
 */
define(['angular', './module', './controllers', './partials'], function (ng, module, controllers, partials) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.config(function config( $stateProvider ) {
        $stateProvider.state( 'editUser', {
            url: '/editUser',
            views: {
                "main": {
                    controller: 'UserEditCtrl',
                    templateUrl: './src/app/list/editUser/editUser.tpl.html'
                }
            },
            data:{ pageTitle: 'Edit' }
        });
    });

});
