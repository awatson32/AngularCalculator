'use strict';

/**
 * @ngdoc function
 * @name angularCalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCalculatorApp
 */
angular.module('angularCalculatorApp')
    .controller('MainCtrl', function($scope) {
        
        $scope.Add = function() {
            
            var op1 = $scope.op1;
            var op2 = $scope.op2;
            
            if (op1 || op2 === null) {
                alert('Enter a number');
            } else {
                var result = op1 + op1;
                alert('The result of adding ' + op1 + ' and ' + op2 + ' is ' + result + '.');
            }
            
            // if (op1 || op2 === '') {
            //     console.log('Enter a number');
            // } else {
            // }
        };

        $scope.Subtract = function(op1, op2) {
            op1 = $scope.op1;
            op2 = $scope.op2;

            var result = op1 - op2;
            alert('The result of substracting' + op2 + ' from ' + op1 + ' is ' + result + '.');
        };

        $scope.Multiply = function() {
            var op1 = $scope.op1;
            var op2 = $scope.op2;

            var result = op1 * op2;
            alert('The result of multipyling ' + op1 + ' and ' + op2 + ' is ' + result + '.');
        };

        $scope.Divide = function() {
            var op1 = $scope.op1;
            var op2 = $scope.op2;

            if (op2 === 0) {
                alert('You cannot divide by zero. Think of the world.');
            } else {
                var result = op1 / op2;
                alert('The result of dividing ' + op1 + ' by ' + op2 + ' is ' + result + '.');
            }

        };


    });
