define(['angular', './module'], function (ng, module) {
    'use strict';

    module.factory( 'LocalStorageNotificationSrv', function () {

        var service = {};

        service.SUCCESS_NOTIFICATION = [];

        service.setSuccessNotification = function(argNotification){
            this.SUCCESS_NOTIFICATION = argNotification;
        };

        service.getNotification = function(){
            return this.SUCCESS_NOTIFICATION;
        };

        return service;
    });

});