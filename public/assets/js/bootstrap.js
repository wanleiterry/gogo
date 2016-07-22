/**
 * 依赖所有应用main
 */
define([
    'angular',
    'app',
    'apps/common/directives/_base',
    'apps/app/main',
    'apps/auth/main'
], function (angular) {
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['body']);
    });
});

