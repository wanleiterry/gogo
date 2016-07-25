define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.page', {
            url: '/page',
            templateUrl: 'assets/js/apps/app/templates/page.html',
            controller:'app.page'
        })
    }]);
});