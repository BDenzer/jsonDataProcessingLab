'use strict';

angular.module('jsonDataProcessingLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('specificStudentInfo', {
        url: '/specificStudentInfo',
        templateUrl: 'app/specificStudentInfo/specificStudentInfo.html',
        controller: 'SpecificStudentInfoCtrl'
      });
  });