'use strict';

var app = angular.module('market', []);


angular.module('jsonDataProcessingLabApp')
  .controller('SpecificStudentInfoCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';


  $scope.studentsInfo = [];

  //$scope.student = $scope.studentsInfo[0];

  $http.get('/api/students').success(function (studentsInfo) {
    $scope.studentsInfo = studentsInfo;
    socket.syncUpdates('student', $scope.studentsInfo);
  });

    //var app = angular.module('market', []);

    /*app.filter('getById', function() {
      return function(input, id) {
        var i=0, len=input.length;
        for (; i<len; i++) {
          if (+input[i].id == +id) {
            return input[i];
          }
        }
        return null;
      }
    });*/

    //app.controller('SomeController', ['$scope', '$filter', function($scope, $filter) {
      //$scope.fish = [{category:'freshwater', id:'1', name: 'trout', more:'false'},  {category:'freshwater', id:'2', name:'bass', more:'false'}]

      $scope.showdetails = function(student_id){
        //var found = $filter('getById')($scope.studentsInfo, student_id);
        //console.log(found);
        $scope.selected = JSON.stringify(student_id);
      };
    //}]);

  });
