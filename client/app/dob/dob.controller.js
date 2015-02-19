'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('DobCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
        $scope.studentsInfo = studentsInfo;
        socket.syncUpdates('student', $scope.studentsInfo);
    });

    $scope.myVar = true;
    $scope.myVar2 = true;
    $scope.hideDOB = true;

    $scope.displayLastNames = function() {
      $scope.myVar = !$scope.myVar;
      if ($scope.myVar2 == false) {
        $scope.myVar2 = !$scope.myVar2;
        $scope.hideDOB = !$scope.hideDOB;
      }
      if($scope.hideDOB == false){
        $scope.hideDOB = !$scope.hideDOB;
      }
    };

    $scope.displayFirstNames = function() {
      $scope.myVar2 = !$scope.myVar2;
      if ($scope.myVar == false) {
        $scope.myVar = !$scope.myVar;
      }
      if( $scope.hideDOB == false){
        $scope.hideDOB = !$scope.hideDOB;
      }
    };

    $scope.displayDOB = function() {
      $scope.hideDOB = !$scope.hideDOB;
      if ($scope.myVar == false) {
        $scope.myVar = !$scope.myVar;
      }
      if( $scope.myVar2 == false){
        $scope.myVar2 = !$scope.myVar2;
      }
    };
    });
