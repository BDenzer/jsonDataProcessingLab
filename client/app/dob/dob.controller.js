'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('DobCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.studentsInfo = [];

    $scope.student = $scope.studentsInfo[0];

    $http.get('/api/students').success(function(studentsInfo) {
        $scope.studentsInfo = studentsInfo;
        socket.syncUpdates('student', $scope.studentsInfo);
    });

    $scope.myVar = true;
    $scope.myVar2 = true;
    $scope.hideDOB = true;
    $scope.creditBool = true;

   /* $scope.hideTable = function(tableBool) {
      tableBool = true;
    };*/
    $scope.displayLastNames = function() {
      $scope.myVar = !$scope.myVar;
      $scope.myVar2 = true;
      $scope.hideDOB = true;
      $scope.creditBool = true;
    };
    $scope.displayFirstNames = function() {
      $scope.myVar2 = !$scope.myVar2;
      $scope.myVar = true;
      $scope.hideDOB = true;
      $scope.creditBool = true
    };
    $scope.displayDOB = function() {
      $scope.hideDOB = !$scope.hideDOB;
      $scope.myVar2 = true;
      $scope.myVar = true;
      $scope.creditBool = true
    };
    $scope.displayCreditsCompleted = function() {
      $scope.creditBool = !$scope.creditBool;
      $scope.myVar2 = true;
      $scope.myVar = true;
      $scope.hideDOB = true
    };


    $scope.totalCredits = function() {
      var totalCredits = 0;
      for(var i = 0; i < $scope.student.courses.length; i++) {
        totalCredits = totalCredits + $scope.student.courses[i].credits;
      }
      return totalCredits
    };



    });
