define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.product_category', {
            url: '/product_category',
            templateUrl: 'assets/js/apps/app/templates/product_category.html'
        })
    }]);
});