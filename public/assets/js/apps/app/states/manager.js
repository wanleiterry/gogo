define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.manager', {
            url: '/manager',
            templateUrl: 'assets/js/apps/app/templates/manager.html',
            controller:'app.manager'
        })
    }]);
});