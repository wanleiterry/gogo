define(['apps/common/states/states'], function (states) {
    states.config(['$stateProvider', function($stateProvider){
        $stateProvider.state('app.product', {
            url: '/product',
            templateUrl: 'assets/js/apps/app/templates/product.html',
            controller:'app.product'
        })
    }]);
});