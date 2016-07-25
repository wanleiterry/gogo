define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.mobile', {
            url: '/mobile',
            templateUrl: 'assets/js/apps/app/templates/mobile.html',
            controller:'app.mobile'
        })
    }]);
});