'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('DobCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.studentsInfo = [];

    $http.get('/api/students').success(function(studentsInfo) {
        $scope.studentsInfo = studentsInfo;
        socket.syncUpdates('student', $scope.studentsInfo);
    });
    $scope.sortByDob = function(){
        var dob = [];
        for (var i = 0; i < $scope.studentsInfo.length; i++){
            dob.push(($scope.studentsInfo[i].dateOfBirth))
        }

        dob = dob.sort();
        return dob;

        //return $scope.studentsInfo.dateOfBirth.sort();

    };
    });
