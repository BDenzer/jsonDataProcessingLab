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

    $scope.lastNameSort = true;
    $scope.firstNameSort = true;
    $scope.majorSort = true;
    $scope.courseSort = true;


   $scope.displayLastNameTable = function() {
     $scope.lastNameSort = false;
     if ($scope.firstNameSort == false) {
       $scope.firstNameSort = true;
     }
     else if ($scope.majorSort == false) {
       $scope.majorSort = true;
     }
     else if ($scope.courseSort == false) {
       $scope.courseSort = true;
     }

   };

    $scope.displayFirstNameTable = function() {
      $scope.firstNameSort = false;
      if ($scope.lastNameSort == false) {
        $scope.lastNameSort = true;
      }
      else if ($scope.majorSort == false) {
        $scope.majorSort = true;
      }
      else if ($scope.courseSort == false) {
        $scope.courseSort = true;
      }

    };
    <!--==============================================================================================-->

    $scope.displayMajorTable = function() {

      $scope.majorSort = false;

      if ($scope.firstNameSort == false) {
        $scope.firstNameSort = true;
      }
      else if ($scope.lastNameSort == false) {
        $scope.lastNameSort = true;
      }
      else if ($scope.courseSort == false) {
        $scope.courseSort = true;
      }
      $scope.checkMajor();
    };

    $scope.checkMajor = function () {
      var studentName = '';
      for (var i = 0; i < $scope.studentsInfo.length; i++) {
        if ($scope.studentsInfo[i].major1 == 'ENGLISH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'FRENCH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'CSCI') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'MATH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'PSYCH') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'POLY SCI') {
          studentName = $scope.studentsInfo.name;
        }
        else if ($scope.studentsInfo[i].major1 == 'STUDIO ART') {
          studentName = $scope.studentsInfo.name;
        }
        return studentName;
      }

    };
    <!--==============================================================================================-->

    $scope.displayCourseTable = function(){
      $scope.courseSort = false;


      if ($scope.firstNameSort == false) {
        $scope.firstNameSort = true;
      }
      else if ($scope.lastNameSort == false) {
        $scope.lastNameSort = true;
      }
      else if ($scope.majorSort == false) {
        $scope.majorSort = true;
      }

      $scope.SearchByCourse();

    };

    //console.log($scope.studentsInfo[1].courses[0]);

    $scope.AllCourses = function(){
      var courseList =[];
      var sortedCoursesList = [];
      for (var i = 0; i < $scope.studentsInfo.length; i++) {
        for (var j = 0; j< $scope.studentsInfo[i].courses.length;j++) {
          if (!courseList.contains($scope.studentsInfo[i].courses[j].name)) {
            courseList.push($scope.studentsInfo[i].courses[j].name)
          }
        }
      }
      sortedCoursesList = courseList.sort();
      return sortedCoursesList;
    };


    $scope.sortedCoursesList =$scope.AllCourses();

    $scope.SearchByCourse = function(){
      var courseName = '';
      for (var j = 0; j< $scope.sortedCoursesList.length; j++ ){
        for (var i = 0;i < $scope.studentsInfo.length; i++) {
          for (var c = 0; c < $scope.studentsInfo[i].courses.length; c++) {
            if ($scope.studentsInfo[i].courses[c].contains($scope.sortedCoursesList[j])){
              courseName = $scope.studentsInfo[i].courses[c].name;
              return courseName;

            }

          }
        }

      }

      };


    $scope.courseStatues = function(student,coursename){
      var statues = '';
      for (var i =0; i < student.courses.length; i++) {
        if (student.courses[i].course.name == coursename) {
          if (["A","B","C","D","E","F"].contains(student.courses[i].grade)){
            statues = "Taken";
          }
          else {
            statues = "Taking";
          }
        }
      }
      return statues;
    }

});
