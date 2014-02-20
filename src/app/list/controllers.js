/**
 * Created with JetBrains PhpStorm.
 * User: Karenina
 * Date: 19/02/14
 * Time: 03:10 PM
 * To change this template use File | Settings | File Templates.
 */
define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'ListCtrl', function HomeController( $scope ) {
        console.log("ListCtrl init....");
    });

});
