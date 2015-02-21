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
    $scope.creditBool = true;

    $scope.hideTable = function(tableBool) {
      if (tableBool == false) {
        tableBool = !tableBool;
      }
      return tableBool
    };
    $scope.displayLastNames = function() {
      $scope.myVar = !$scope.myVar;
      $scope.hideTable($scope.myVar2);
      $scope.hideTable($scope.hideDOB);
      $scope.hideTable($scope.creditBool);
    };

    $scope.displayFirstNames = function() {
      $scope.myVar2 = !$scope.myVar2;
      $scope.hideTable($scope.myVar);
      $scope.hideTable($scope.hideDOB);
      $scope.hideTable($scope.creditBool);
    };

    $scope.displayDOB = function() {
      $scope.hideDOB = !$scope.hideDOB;
      $scope.hideTable($scope.myVar);
      $scope.hideTable($scope.myVar2);
      $scope.hideTable($scope.creditBool);
    };
    $scope.displayCreditsCompleted = function() {
      $scope.creditBool = !$scope.creditBool;
      $scope.hideTable($scope.myVar);
      $scope.hideTable($scope.myVar2);
      $scope.hideTable($scope.hideDOB);
    };


    $scope.totalCredits = function() {
      var totalCredits = 0;
      for(var i = 0; i < student.courses.length; i++) {
        totalCredits = totalCredits + student.courses[i].credits;
      }
      return totalCredits
    };


    });
