define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.system', {
            url: '/system',
            templateUrl: 'assets/js/apps/app/templates/system.html'
        })
    }]);
});