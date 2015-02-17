'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('SortFullNameCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

  console.log("H");


    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
      $scope.studentsInfo = studentsInfo;
      socket.syncUpdates('student', $scope.studentsInfo);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('student');
    });

    $scope.sortByFullName = function() {
      var fullName = [];
      fullName = $scope.studentsInfo;
      var result =[];
      result = fullName.sort();
      result = fullName.sort();
      console.log(result);
      return result;
    };

    var sortedFullNameList = $scope.sortByFullName();
    $scope.sortedFullName= [];
    $scope.sortedFullName = sortedFullNameList;
});

