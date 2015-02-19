'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      //When adding pages to the NavBar make sure that it looks like the following
      'title': 'Home',
      'link': '/',
      'FindStudentByNames':'Find Student By Name',
      'linkForFindStudentByNames':'/sortFullName',
      'SortByMajor': 'Find Student By Major',
      'linkForSortByMajor': '/sortByMajor',
      'linkForDOB': '/dob',
      'FindDOB': 'Find Student By Date of Birth'
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
