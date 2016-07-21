define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('system', {
            abstract: true,
            url: '/system',
            templateUrl: 'assets/js/apps/system/templates/layout.html'
        }).state('system.main', {
            url: '',
            templateUrl: 'assets/js/apps/system/templates/main.html',
            controller:'system.main'
        })
    }]);
});