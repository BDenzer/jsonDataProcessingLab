'use strict';

describe('Controller: DobCtrl', function () {

  // load the controller's module
  beforeEach(module('jsonDataProcessingLabApp'));

  var DobCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DobCtrl = $controller('DobCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
