'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('SortFullNameCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';


    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
      $scope.studentsInfo = studentsInfo;
      //for (var i = 0; i < studentsInfo.length; i++) {
      //  $scope.studentsInfo.sort($scope.compareName(studentsInfo[i].name, studentsInfo[i+1].name));
      //}
      socket.syncUpdates('student', $scope.studentsInfo);
      console.log("Hello");
    });

    //$http.post('/app/sortFullName', {name: $scope.studentsInfo.name});


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('student');
    });

    console.log("What's up?");

    $scope.sortByFullName = function() {

      var fullName = [];
      for (var i = 0; i < $scope.studentsInfo.length; i++) {
        fullName.push($scope.studentsInfo[i].lastName + ", " + $scope.studentsInfo[i].firstName);
      }
      var result = [];
      result = fullName.sort();

      return console.log(result);
    };

    //$scope.compareName = function(student1, student2) {
    //  if (student1.lastName === student2.lastName) {
    //    return 0;
    //  }
    //  else if (student1.lastName < student2.lastName) {
    //    return -1;
    //  }
    //  else if (student1.lastName > student2.lastName) {
    //    return 1;
    //  }
    //  if (student1.firstName === student2.firstName) {
    //    return 0;
    //  }
    //  else if (student1.firstName < student2.firstName) {
    //    return -1;
    //  } else { return 1;}
    //};

});
