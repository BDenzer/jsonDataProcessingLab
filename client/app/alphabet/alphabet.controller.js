'use strict';


angular.module('jsonDataProcessingLabApp')
  .controller('AlphaCtrl', function ($scope, $http, socket) {

    var Student = require('./student.model');

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.sortByFullName = function() {
      var fullName =[];
      fullName = Student.schema.name;
      console.log(fullName);
      var result =[];
      result = fullName.sort();
      console.log(result);
      return result;
    };

    var sortedFullNameList = $scope.sortByFullName();
    $scope.sortedFullName= [];
    $scope.sortedFullName = sortedFullNameList;
  });
