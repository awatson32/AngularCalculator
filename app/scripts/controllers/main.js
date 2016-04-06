'use strict';

/**
 * @ngdoc function
 * @name angularCalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCalculatorApp
 */
angular.module('angularCalculatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
