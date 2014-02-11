define([
    'angular',
    './home/index',
    './about/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);
});