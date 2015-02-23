'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('DobCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.studentsInfo = [];

    //$scope.student = $scope.studentsInfo[0];

    $http.get('/api/students').success(function (studentsInfo) {
      $scope.studentsInfo = studentsInfo;
      socket.syncUpdates('student', $scope.studentsInfo);
    });

    $scope.toSort = "lastName";
    $scope.order = true;



    $scope.totalCredits = function(student) {
      var totalCredits = 0;
      for(var i = 0; i < student.courses.length; i++) {
        if(student.courses[i].grade != "IP" && student.courses[i].grade != "F") {
          totalCredits = totalCredits + student.courses[i].course.credits;
          //console.log(student.courses[i].course.name)
        }
      }
      return totalCredits;
    };

    $scope.changeToNumber = function(grade){
      var result=0;
      switch(grade) {
        case "A":
          return result=4.0;
          break;
        case "B":
          return result = 3.0;
          break;
        case "C":
          return result=2.0;
          break;
        case "D":
          return result = 1.0;
          break;
        case "F":
          return result=0.0;
          break;
      }
      return null;
    };

    $scope.GPA = function(student) {
      var totalCredits = 0;
      var gpaNumerator = 0;
      for(var i = 0; i < student.courses.length; i++) {
        if(student.courses[i].grade != "IP") {
          totalCredits = totalCredits + student.courses[i].course.credits;
          gpaNumerator = gpaNumerator + $scope.changeToNumber(student.courses[i].grade) * student.courses[i].course.credits;
          //console.log(student.courses[i].course.name)
        }
      }
      return (gpaNumerator/totalCredits).toFixed(3);
    };

    $scope.sortByCredits = function(){
        $scope.toSort = function(student){
            return $scope.totalCredits(student);
        };
    };

    $scope.sortByGpa = function(){
        $scope.toSort = function(student){
            return $scope.GPA(student);
        };
    };


  });
