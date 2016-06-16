/**
 * 依赖所有应用main
 */
define([
    'angular',
    'app',
    'apps/common/directives/_base',
    'apps/common/states/states'
], function (angular) {
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['body']);
    });
});

