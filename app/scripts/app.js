'use strict';

/**
 * @ngdoc overview
 * @name angularCalculatorApp
 * @description
 * # angularCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('angularCalculatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
