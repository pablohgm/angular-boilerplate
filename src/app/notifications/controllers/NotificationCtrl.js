define(['angular', './module'], function (ng, module) {
    'use strict';

    /**
     * And of course we define a controller for our route.
     */
    module.controller( 'NotificationCtrl', function NotificationController( $scope, LocalStorageNotificationSrv ) {
        console.log("NotificationCtrl ....");

        $scope.notifications = [];

        $scope.init = function(){
            console.log("NotificationCtrl ....");
            $scope.notifications = LocalStorageNotificationSrv.SUCCESS_NOTIFICATION;
        };

        $scope.$watch( function(){ return LocalStorageNotificationSrv.SUCCESS_NOTIFICATION; } , function(argNotification){
            if(_.isEmpty(argNotification) || _.isUndefined(argNotification)){
                return;
            }
            $scope.notifications.push(argNotification);
        });

        $scope.closeAlert = function(index) {
            $scope.notifications.splice(index, 1);
        };

        $scope.init();
    });

});