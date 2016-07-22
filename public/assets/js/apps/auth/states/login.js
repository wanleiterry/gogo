define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('auth', {
            abstract: true,
            url: '/auth',
            templateUrl: 'assets/js/apps/auth/templates/layout.html'
        }).state('auth.login', {
            url: '/login',
            templateUrl: 'assets/js/apps/auth/templates/login.html',
            controller: 'auth.login'
        });
    }]);
});