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
    <!--==============================================================================================-->

});
