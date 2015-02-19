'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('DobCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
        $scope.studentsInfo = studentsInfo;
        socket.syncUpdates('student', $scope.studentsInfo);
    });

    });
