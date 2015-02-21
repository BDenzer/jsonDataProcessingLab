'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('DobCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
        $scope.studentsInfo = studentsInfo;
        socket.syncUpdates('student', $scope.studentsInfo);
    });

    $scope.lastNameSort = true;
    $scope.firstNameSort = true;
    $scope.hideDOB = true;

    $scope.displayLastNameTable = function() {
      $scope.lastNameSort = !$scope.lastNameSort;
      if ($scope.firstNameSort == false) {
        $scope.firstNameSort = !$scope.firstNameSort;
        $scope.hideDOB = !$scope.hideDOB;
      }
      if($scope.hideDOB == false){
        $scope.hideDOB = !$scope.hideDOB;
      }
    };

    $scope.displayFirstNameTable = function() {
      $scope.firstNameSort = !$scope.firstNameSort;
      if ($scope.lastNameSort == false) {
        $scope.lastNameSort = !$scope.lastNameSort;
      }
      if( $scope.hideDOB == false){
        $scope.hideDOB = !$scope.hideDOB;
      }
    };

    $scope.displayDOB = function() {
      $scope.hideDOB = !$scope.hideDOB;
      if ($scope.lastNameSort == false) {
        $scope.lastNameSort = !$scope.lastNameSort;
      }
      if( $scope.firstNameSort == false){
        $scope.firstNameSort = !$scope.firstNameSort;
      }
    };
    });
