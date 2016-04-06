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
    
    
    $scope.Add = function(op1, op2) {
          op1 = $scope.op1;
          op2 = $scope.op2;
        if (op1 || op2 === '&nbsp;') {
            console.log('Enter a number');
        } else {
            var result = op1 + op2;
            console.log(result); 
        }
            
        // var result = op1 + op2;
        
        // if(op1 || op2 === ' ') {
        //     console.log('You must enter something!');
        // } else {
            
            
        // }
        
    };
    
    $scope.Subtract = function(op1, op2) {
        op1 = $scope.op1;
        op2 = $scope.op2;
        
        var result = op1 - op2;
        console.log(result);
    };
    
    $scope.Multiply = function() {
        var op1 = $scope.op1;
        var op2 = $scope.op2;
        
        var result = op1 * op2;
        console.log(result);
    };
    
    $scope.Divide = function () {
        var op1 = $scope.op1;
        var op2 = $scope.op2;
        
        if (op2 === 0) {
            console.log('You cannot divide by zero. Think of the world.');
        } else {
            var result = op1 / op2;
            console.log(result);
        }
        
    };
    
    
  });
