'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
 // 'myApp.view1',
 // 'myApp.view2',
 // 'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('PlayerController', ['$scope', function($scope) {
   $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.src = '/Downloads/npr.mp4';

}]);

app.controller('RelatedController', ['$scope', function($scope) {

}]);