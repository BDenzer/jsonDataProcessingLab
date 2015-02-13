'use strict';


angular.module('jsonDataProcessingLabApp')
  .controller('AlphaCtrl', function ($scope, $http, socket) {

    var Student = require('./student.model');

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
      console.log("hi");
      var result =[];
      result = fullName.sort();
      console.log(result);
      return result;
    };

    var sortedFullNameList = $scope.sortByFullName();
    $scope.sortedFullName= [];
    $scope.sortedFullName = sortedFullNameList;
  });
