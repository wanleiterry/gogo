define(['apps/common/states/states'], function (states) {
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