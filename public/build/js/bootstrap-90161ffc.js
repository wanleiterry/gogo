define('apps/common/controllers/controllers',['angular'], function (angular) {
    var controllers = angular.module('controllers', ['ngProgress']);
    controllers.controller('bodyController', ['$scope', '$state', '$http', '$location', 'ngProgressFactory', '$modal', function ($scope, $state, $http, $location, ngProgressFactory, $modal) {
        $scope._global = _global;
        $scope.topProgressbar = ngProgressFactory.createInstance();
        $scope.topProgressbar.setColor('#f40');
        $scope.$on('$stateChangeStart', function () {
            $scope.topProgressbar.start();
        });
        $scope.$on('$stateChangeSuccess', function () {
            $scope.topProgressbar.complete();
        });
    }]);
    return controllers;
});



define('apps/common/directives/directives',['angular'], function (angular) {
    return angular.module('directives', []);
});
define('apps/common/services/services',['angular'], function (angular) {
    var services = angular.module('services', []);

    return services;
});
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
    'apps/common/controllers/controllers',
    'apps/common/directives/directives',
    'apps/common/services/services',
    'templates'
], function (angular) {
    var app = angular.module('body', ['ui.bootstrap', 'ui.select','ui.sortable', 'states', 'ngProgress', 'xeditable', 'ngCkeditor', 'ngDragDrop', 'ngResource', 'ngClipboard', 'flash', 'ngAnimate', 'ngPopover', 'ngDateRange', 'mwl.confirm', 'controllers', 'directives', 'services','templates']);

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
define('apps/common/directives/_base',[

], function () {});
define('apps/common/states/states',['angular'], function (angular) {
    var states = angular.module('states', ['ui.router']);
    states.config(function($locationProvider){
        $locationProvider.html5Mode(true);
    });
    return states;
});
define('apps/app/states/system',['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'assets/js/apps/app/templates/layout.html'
        }).state('app.dashboard', {
            url: '',
            templateUrl: 'assets/js/apps/app/templates/dashboard.html',
            controller:'app.dashboard'
        }).state('app.system', {
            url: '/system',
            templateUrl: 'assets/js/apps/app/templates/system.html',
            controller:'app.system'
        })
    }]);
});
define('apps/app/states/_base',[
    'apps/app/states/system'
], function () {});
/**
 * Created by chloe on 15/12/15.
 */
define('apps/app/controllers/dashboard',['apps/common/controllers/controllers'], function (controllers) {
    controllers.controller('app.dashboard', ['$scope','Flash', '$timeout', '$state', '$stateParams', 'designData', 'designValidate', 'TeamerDesignResource', function ($scope, Flash, $timeout, $state, $stateParams, designData, designValidate, TeamerDesignResource) {
        
    }]);
});
/**
 * Created by chloe on 15/12/15.
 */
define('apps/app/controllers/system',['apps/common/controllers/controllers'], function (controllers) {
    controllers.controller('app.system', ['$scope','Flash', '$timeout', '$state', '$stateParams', 'designData', 'designValidate', 'TeamerDesignResource', function ($scope, Flash, $timeout, $state, $stateParams, designData, designValidate, TeamerDesignResource) {
        
    }]);
});
define('apps/app/controllers/_base',[
    'apps/app/controllers/dashboard',
    'apps/app/controllers/system'
], function () {});
define('apps/app/services/_base',[
    
], function () {});
define('apps/app/main',[
    'apps/app/states/_base',
    'apps/app/controllers/_base',
    'apps/app/services/_base'
], function () {});
/**
 * 依赖所有应用main
 */
define('bootstrap',[
    'angular',
    'app',
    'apps/common/directives/_base',
    // 'apps/common/states/states',
    'apps/app/main'
], function (angular) {
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['body']);
    });
});


