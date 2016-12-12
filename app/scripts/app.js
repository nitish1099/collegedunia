'use strict';

/**
 * @ngdoc overview
 * @name collegeduniaApp
 * @description
 * # collegeduniaApp
 *
 * Main module of the application.
 */
angular
  .module('collegeduniaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
