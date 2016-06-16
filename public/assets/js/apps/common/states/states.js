define(['angular'], function (angular) {
    var states = angular.module('states', ['ui.router']);
    states.config(function($locationProvider){
        $locationProvider.html5Mode(true);
    });
    return states;
});