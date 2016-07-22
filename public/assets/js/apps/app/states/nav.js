define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.nav', {
            url: '/nav',
            templateUrl: 'assets/js/apps/app/templates/nav.html'
        })
    }]);
});