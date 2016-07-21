/**
 * Created by chloe on 15/12/15.
 */
define(['apps/common/controllers/controllers'], function (controllers) {
    controllers.controller('app.system', ['$scope','Flash', '$timeout', '$state', '$stateParams', function ($scope, Flash, $timeout, $state, $stateParams) {
        alert(123)
    }]);
});