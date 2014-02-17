//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";


/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app'
], function (require, ng, app) {
    'use strict';

    require(['domReady!'], function (document) {
        //ng.bootstrap(document, ['app']);
        ng.resumeBootstrap([app.name]);
    });
});