define(['angular'], function (ng) {
    'use strict';
    return ng.module('app.notifications',
        [
            'app.notifications.controllers',
            'app.notifications.services',
            'angularLocalStorage'
        ]);
});