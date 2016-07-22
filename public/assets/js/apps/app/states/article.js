define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.article', {
            url: '/article',
            templateUrl: 'assets/js/apps/app/templates/article.html'
        })
    }]);
});