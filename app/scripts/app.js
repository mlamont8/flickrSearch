'use strict';

/**
 * @ngdoc overview
 * @name flickrsearchApp
 * @description
 * # flickrsearchApp
 *
 * Main module of the application.
 */
angular
  .module('flickrsearchApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngMaterial',
    'ngRoute',
    'angularGrid'
  ])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'views/main.html',
        controller: 'ListController'
    });
    $locationProvider.html5Mode(true);

  });
