'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('SortFullNameCtrl', function ($scope, $http, socket) {

    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
      $scope.studentsInfo = studentsInfo;

      socket.syncUpdates('student', $scope.studentsInfo);

    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('student');
    });

    $scope.lastNameSort = true;
    $scope.firstNameSort = true;
    $scope.majorSort = true;

   $scope.displayLastNameTable = function() {
     $scope.lastNameSort = false;
     if ($scope.firstNameSort == false) {
       $scope.firstNameSort = true;
     }
     else if ($scope.majorSort == false) {
       $scope.majorSort = true;
     }

   };

    $scope.displayFirstNameTable = function() {
      $scope.firstNameSort = false;
      if ($scope.lastNameSort == false) {
        $scope.lastNameSort = true;
      }
      else if ($scope.majorSort == false) {
        $scope.majorSort = true;
      }

    };

    $scope.displayMajorTable = function() {

      $scope.majorSort = false;

      if ($scope.firstNameSort == false) {
        $scope.firstNameSort = true;
      }
      else if ($scope.lastNameSort == false) {
        $scope.lastNameSort = true;
      }
      $scope.checkMajor();
    };

    $scope.checkMajor = function () {
      var studentName = '';
      for (var i = 0; i < $scope.studentsInfo.length; i++) {
        if ($scope.studentsInfo[i].major1 == 'ENGLISH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'FRENCH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'CSCI') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'MATH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'PSYCH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'POLY SCI') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'STUDIO ART') {
          studentName = $scope.studentsInfo.name;
        }
        return studentName;
      }

    };

});
