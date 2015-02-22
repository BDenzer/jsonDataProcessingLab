'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('SpecificStudentInfoCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';


  $scope.studentsInfo = [];


  $http.get('/api/students').success(function (studentsInfo) {
    $scope.studentsInfo = studentsInfo;
    socket.syncUpdates('student', $scope.studentsInfo);
  });



      $scope.showdetails = function(student){
        document.getElementById("coursesInfo").innerHTML = "";
        //document.getElementById("studentInfo").innerHTML = "";
        document.getElementById("coursesInfo").innerHTML =  student.firstName + " "+ student.lastName + "<br/>"
                                                            + "Date of Birth: " +  student.dateOfBirth + "<br/>"
                                                            + "Gender: " +  student.gender + "<br/>"
                                                            + "Email: " +  student.email + "<br/>"
                                                            + "Phone: " +  student.phone + "<br/>"
                                                            + "Address: " +  student.address + "<br/>";
      };

    $scope.showCourses = function(student){
      document.getElementById("coursesInfo").innerHTML = "";
      for(var i = 0; i < student.courses.length; i++) {
        document.getElementById("coursesInfo").innerHTML =  document.getElementById("coursesInfo").innerHTML +  "Course Name: " + student.courses[i].course.name + "       Grade: " + student.courses[i].grade + "<br/>";
      }
      document.getElementById("coursesInfo").innerHTML =  student.firstName + " "+ student.lastName + "<br/>" +  document.getElementById("coursesInfo").innerHTML
    };
  });
