define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: 'assets/js/apps/app/templates/dashboard.html',
            controller:'app.dashboard'
        })
    }]);
});