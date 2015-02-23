'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      //When adding pages to the NavBar make sure that it looks like the following
      'title': 'Home',
      'link': '/',
      'FindStudentByNames':'List of Courses',
      'linkForFindStudentByNames':'/sortFullName',
      'linkForDOB': '/dob',
      'FindDOB': 'List of Students',
      'FindspecificStudentInfo':'Get information on specific students',
      'linkForspecificStudentInfo':'/specificStudentInfo',
      'DetailedInfo':'Detailed Student Info'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
