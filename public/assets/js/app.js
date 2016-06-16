define([
    'angular',
    'jquery',
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    'ui.sortable',
    'ngProgress',
    'xeditable',
    'ngCkeditor',
    'ngDragDrop',
    'ngResource',
    'ngClipboard',
    'flashAlert',
    'ngAnimate',
    'ngPopover',
    'ngDateRange',
    'mwl.confirm',
    'apps/common/controllers/controllers',
    'apps/common/directives/directives',
    'apps/common/services/services',
    'templates'
], function (angular) {
    var app = angular.module('body', ['ui.bootstrap', 'ui.select','ui.sortable', 'states', 'ngProgress', 'xeditable', 'ngCkeditor', 'ngDragDrop', 'ngResource', 'ngClipboard', 'flash', 'ngAnimate', 'ngPopover', 'ngDateRange', 'mwl.confirm', 'controllers', 'directives', 'services','templates']);

    return app;
});