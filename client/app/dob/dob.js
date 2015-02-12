/**
 * Created by denz0045 on 2/10/15.
 */
'use strict';

angular.module('jsonDataProcessingLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dob', {
        url: '/dob',
        templateUrl: 'app/dob/dob.html',
        controller: 'dobCtrl'
      });
  });
