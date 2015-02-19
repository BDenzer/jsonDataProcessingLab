'use strict';

angular.module('jsonDataProcessingLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sortByMajor', {
        url: '/sortByMajor',
        templateUrl: 'app/sortByMajor/sortByMajor.html',
        controller: 'SortByMajorCtrl'
      });
  });