define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'assets/js/apps/app/templates/layout.html'
        }).state('app.system', {
            url: '/system',
            templateUrl: 'assets/js/apps/app/templates/system.html',
            controller:'app.system'
        })
    }]);
});