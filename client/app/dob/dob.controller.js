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

    $scope.myVar = true;
    $scope.myVar2 = true;
    $scope.hideDOB = true;
    $scope.creditBool = true;
    $scope.gpaBool = true;

   /* $scope.booleanArray = [
      $scope.myVar,
      $scope.myVar2,
      $scope.hideDOB,
      $scope.creditBool
    ];*/

   /* $scope.hideTables = function() {
      for (var i = 0; i < booleanArray.length; i ++) {
        $scope.booleanArray[i] = true;
      }
      showTable = !showTable;
    };*/
    $scope.displayLastNames = function() {
      $scope.myVar = !$scope.myVar;
      $scope.myVar2 = true;
      $scope.hideDOB = true;
      $scope.creditBool = true;
      $scope.gpaBool = true;
    };
    $scope.displayFirstNames = function() {
      $scope.myVar2 = !$scope.myVar2;
      $scope.myVar = true;
      $scope.hideDOB = true;
      $scope.creditBool = true;
      $scope.gpaBool = true;
    };
    $scope.displayDOB = function() {
      $scope.hideDOB = !$scope.hideDOB;
      $scope.myVar2 = true;
      $scope.myVar = true;
      $scope.creditBool = true;
      $scope.gpaBool = true;
    };
    $scope.displayCreditsCompleted = function() {
      $scope.creditBool = !$scope.creditBool;
      $scope.myVar2 = true;
      $scope.myVar = true;
      $scope.hideDOB = true;
      $scope.gpaBool = true;
    };
    $scope.displayGPA = function() {
      $scope.gpaBool = !$scope.gpaBool;
      $scope.myVar2 = true;
      $scope.myVar = true;
      $scope.hideDOB = true;
      $scope.creditBool = true;
    };


//Don't have to worry about grade points
   /* $scope.getCredits = function(credit) {
      var grade = $scope.studentsInfo.courses.course.grade;
      var credits = 0;
      if(grade == "A"){
        credits = credit * 1;
      }
      else if(grade == "B") {
        credits =
      }
    };*/

    /*$scope.isCompleted = function() {
      if ($scope.studentsInfo[$scope.student].courses[0].course.grade == "IP") {
        return false;
      } else{
        return true;
      }
    };*/


    $scope.totalCredits = function(student) {
      var totalCredits = 0;
      for(var i = 0; i < student.courses.length; i++) {
        if(student.courses[i].grade != "IP") {
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
      return gpaNumerator/totalCredits;
    };


  });
