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
      fullName = StudentSchema.name;
      var result =[];
      result = fullName.sort();
      return result;
    };

    var sortedFullNameList = $scope.sortByFullName();
    $scope.sortedFullName= [
      {name:sortedFullNameList}
    ];
  });
