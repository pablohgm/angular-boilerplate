define(['angular', './module'], function (ng, module) {
    'use strict';

    module.factory( 'LocalStorageNotificationSrv', function () {
        var service = {};

        service.saveObjectSuccess = function(){
            console.log("saveObjectSuccess");
        };

        return service;
    });

});