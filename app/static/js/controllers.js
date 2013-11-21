'use strict';

var onwithmeApp = angular.module('onwithmeApp', []);
onwithmeApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

onwithmeApp.controller('HomeCtrl', function($scope){
    $scope.starting_soon = [
        { id: 1,
          name: 'Test',
          start: '1/1/2014'
        },
        { id: 2,
          name: 'Another Test',
          start: '1/15/2014'
        }
    ];
    $scope.popular = [
        { id: 1,
          name: 'Test',
          start: '1/1/2014'
        },
        { id: 2,
          name: 'Another Test',
          start: '1/15/2014'
        }
    ];
});