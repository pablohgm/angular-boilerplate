define(['angular', 'placeholders'], function (ng) {
    'use strict';
    return ng.module('app.about',
        ['ui.router',
         'plusOne',
         'placeholders'
        ]);
});