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
      var firstName = [];
      var lastName= [];
      var fullName = [];
      for (var i = 0; i < $scope.studentsInfo.length; i++) {
        fullName.push($scope.studentsInfo[i].firstName);
      }
      var result =[];
      result = fullName.sort();
      //console.log(result);
      //if($scope.studentsInfo.length > 0) {
      //  console.log($scope.studentsInfo[0].firstName + "");
      //} else {
      //  console.log("waiting for data");
      //}
      return result;
    };

    //var sortedFullNameList = $scope.sortByFullName();
    //$scope.sortedFullName= [];
    //$scope.sortedFullName = sortedFullNameList;
});

