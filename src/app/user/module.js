define(['angular'], function (ng) {
    'use strict';
    return ng.module('app.user',
        [
         'app.user.partials',
         'app.user.controllers',
         'app.user.services',
         'ui.router',
         'plusOne',
         'placeholders',
         'angularLocalStorage'
        ]);
});