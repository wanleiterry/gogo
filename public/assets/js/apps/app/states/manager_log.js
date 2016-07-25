define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.manager_log', {
            url: '/manager_log',
            templateUrl: 'assets/js/apps/app/templates/manager_log.html',
            controller:'app.manager_log'
        })
    }]);
});