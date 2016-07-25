define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.article_category', {
            url: '/article_category',
            templateUrl: 'assets/js/apps/app/templates/article_category.html',
            controller:'app.article_category'
        })
    }]);
});