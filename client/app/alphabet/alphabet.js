'use strict';

angular.module('jsonDataProcessingLabApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('alphabet', {
        url: '/alphabet',
        templateUrl: 'app/alphabet.alphabet.html',
        controller: 'alphabetCtrl'
      });
  });
