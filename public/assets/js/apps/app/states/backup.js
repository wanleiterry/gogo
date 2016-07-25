define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.backup', {
            url: '/backup',
            templateUrl: 'assets/js/apps/app/templates/backup.html',
            controller:'app.backup'
        })
    }]);
});