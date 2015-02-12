/**
 * Created by denz0045 on 2/10/15.
 */
'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('dobCtrl', function ($scope, $http, socket) {
    $scope.studentInfo = [];

    $http.get('/api/student').success(function(Student) {
      $scope.studentInfo = Student;
      socket.syncUpdates('student', $scope.studentInfo);
    });

    $scope.addStudent = function() {
      if($scope.newStudent === '') {
        return;
      }
      $http.post('/api/student', { name: $scope.newStudent });
      $scope.newStudent = '';
    };

    $scope.deleteStudent = function(student) {
      $http.delete('/api/student/' + student._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('student');
    });

    $scope.sortByDob = function() {
      return $scope.studentInfo[0].dateOfBirth;
    };

  });
