'use strict';

describe('Controller: SpecificStudentInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('jsonDataProcessingLabApp'));

  var SpecificStudentInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpecificStudentInfoCtrl = $controller('SpecificStudentInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
