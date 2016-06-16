define('app',[
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
    // 'apps/common/controllers/controllers',
    // 'apps/common/directives/directives',
    // 'apps/common/services/services',
    'templates'
], function (angular) {
    // var app = angular.module('body', ['ui.bootstrap', 'ui.select','ui.sortable', 'states', 'ngProgress', 'xeditable', 'ngCkeditor', 'ngDragDrop', 'ngResource', 'ngClipboard', 'flash', 'ngAnimate', 'ngPopover', 'ngDateRange', 'mwl.confirm', 'controllers', 'directives', 'services','templates']);
    var app = angular.module('body', ['ui.bootstrap', 'ui.select','ui.sortable', 'states', 'ngProgress', 'xeditable', 'ngCkeditor', 'ngDragDrop', 'ngResource', 'ngClipboard', 'flash', 'ngAnimate', 'ngPopover', 'ngDateRange', 'mwl.confirm', 'templates']);
    app.config(['ngClipProvider', function (ngClipProvider) {
        ngClipProvider.setPath("assets/js/libs/zeroclipboard/ZeroClipboard.swf");
    }]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(['$q', '$location', 'Flash', '$injector', function($q, $location, Flash, $injector){
            return {
                'response': function(response) {
                    return response || $q.when(response);
                },

                'responseError': function(rejection) {
                    switch (rejection.status) {
                        case 500:
                            Flash.create('danger', '系统错误，请稍后再试！');
                            break;
                        case 401:
                            if($location.$$path != '/auth/login'){
                                window.location.replace('/auth/login');
                            }
                            //$location.path('/auth/login').replace();
                            break;
                    }
                    return $q.reject(rejection);
                }
            };
        }]);
    }]).run(['editableOptions', 'editableThemes', function(editableOptions, editableThemes) {
        editableThemes.bs3.inputClass = 'input-xs';
        editableThemes.bs3.buttonsClass = 'btn-xs';
        editableOptions.theme = 'bs3';
        editableOptions.icon_set = 'font-awesome';
    }]);

    return app;
});
/**
 * 依赖所有应用main
 */
 define('bootstrap',[
    'angular',
    'app'
    ], function (angular) {
        angular.element(document).ready(function(){
            angular.bootstrap(document, ['body']);
        });
	});


