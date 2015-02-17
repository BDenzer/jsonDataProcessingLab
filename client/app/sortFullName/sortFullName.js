'use strict';

angular.module('jsonDataProcessingLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sortFullName', {
        url: '/sortFullName',
        templateUrl: 'app/sortFullName/sortFullName.html',
        controller: 'SortFullNameCtrl'
      });
  });