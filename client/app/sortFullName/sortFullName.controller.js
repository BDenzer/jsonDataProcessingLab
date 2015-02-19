'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('SortFullNameCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';


    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
      $scope.studentsInfo = studentsInfo;

      socket.syncUpdates('student', $scope.studentsInfo);

    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('student');
    });

   $scope.myVar = true;
    $scope.myVar2 = true;

   $scope.displayLastNames = function() {
     $scope.myVar = !$scope.myVar;
     if ($scope.myVar2 == false) {
       $scope.myVar2 = !$scope.myVar2;
     }

   };

    $scope.displayFirstNames = function() {
      $scope.myVar2 = !$scope.myVar2;
      if ($scope.myVar == false) {
        $scope.myVar = !$scope.myVar;
      }
    };


});
