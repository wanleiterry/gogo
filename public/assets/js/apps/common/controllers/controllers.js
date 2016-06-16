define(['angular'], function (angular) {
    var controllers = angular.module('controllers', ['ngProgress']);
    controllers.controller('bodyController', ['$scope', '$state', '$http', '$location', 'ngProgressFactory', '$modal', function ($scope, $state, $http, $location, ngProgressFactory, $modal) {
        $scope._global = _global;
        $scope.topProgressbar = ngProgressFactory.createInstance();
        $scope.topProgressbar.setColor('#f40');
        $scope.$on('$stateChangeStart', function () {
            $scope.topProgressbar.start();
        });
        $scope.$on('$stateChangeSuccess', function () {
            $scope.topProgressbar.complete();
        });
    }]);
    return controllers;
});


