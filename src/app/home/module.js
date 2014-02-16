define(['angular'], function (ng) {
    'use strict';
    return ng.module('app.home',
        [
         'app.home.partials',
         'ui.router',
         'plusOne'
        ]);
});