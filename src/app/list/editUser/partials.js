/**
 * Created with JetBrains PhpStorm.
 * User: Karenina
 * Date: 19/02/14
 * Time: 03:10 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'require',
    'angular',
    'angularTemplateCache',
    'text!./editUser.tpl.html'
], function (require, ng, angularTemplateCache, listTpl) {
    'use strict';
    var templates = {
        'home': {
            url: './src/app/list/editUser/editUser.tpl.html',
            template: listTpl
        }
    };

    var module = ng.module('app.user.editUser.partials', [
    ]);
    module.run(function($templateCache){
        angularTemplateCache.registerTemplates(ng, $templateCache, templates);
    });

    return module;
});
