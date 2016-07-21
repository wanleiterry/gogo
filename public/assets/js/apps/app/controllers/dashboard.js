define(['apps/common/controllers/controllers'], function (controllers) {
    controllers.controller('app.dashboard', ['$scope','Flash', '$timeout', '$state', '$stateParams', function ($scope, Flash, $timeout, $state, $stateParams) {
        alert('dashboard');
    }]);
});