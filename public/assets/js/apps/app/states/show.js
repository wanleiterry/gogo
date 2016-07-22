define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.show', {
            url: '/show',
            templateUrl: 'assets/js/apps/app/templates/show.html'
        })
    }]);
});