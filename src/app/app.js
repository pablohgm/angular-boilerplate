define([
    'angular',
    'angularBootstrap',
    'angularUIRouter',
    'angularUIUtils',
    'plusOne',
    './home/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.home'
    ]);
});