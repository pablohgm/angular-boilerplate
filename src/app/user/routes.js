/**
 * Created with JetBrains PhpStorm.
 * User: Karenina
 * Date: 19/02/14
 * Time: 03:10 PM
 * To change this template use File | Settings | File Templates.
 */
define(['angular', './module', './controllers/index'], function (ng, module, controllers) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.config(function config( $stateProvider ) {

        $stateProvider.state( 'userList', {
            url: '/users',
            views: {
                "main": {
                    controller: 'UserListCtrl',
                    templateUrl: './src/app/user/partials/userList.tpl.html'
                }
            },
            data:{ pageTitle: 'List Users' }
        });

        $stateProvider.state( 'userCreate', {
            url: '/userCreate',
            views: {
                "main": {
                    controller: 'UserEditCtrl',
                    templateUrl: './src/app/user/partials/userEdit.tpl.html'
                }
            },
            data:{ pageTitle: 'Create User' }
        });

        $stateProvider.state( 'userEdit', {
            url: '/userEdit/:userId',
            views: {
                "main": {
                    controller: 'UserEditCtrl',
                    templateUrl: './src/app/user/partials/userEdit.tpl.html'
                }
            },
            data:{ pageTitle: 'Edit User' }
        });
    });

});
