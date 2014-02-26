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
    'text!./userList.tpl.html',
    'text!./userEdit.tpl.html'
], function (require, ng, angularTemplateCache, listTpl, editTpl) {
    'use strict';
    var templates = {
        'userList': {
            url: './src/app/user/partials/userList.tpl.html',
            template: listTpl
        },
        'userEdit': {
            url: './src/app/user/partials/userEdit.tpl.html',
            template: editTpl
        }
    };

    var module = ng.module('app.user.partials', [
    ]);
    module.run(function($templateCache){
        angularTemplateCache.registerTemplates(ng, $templateCache, templates);
    });

    return module;
});
