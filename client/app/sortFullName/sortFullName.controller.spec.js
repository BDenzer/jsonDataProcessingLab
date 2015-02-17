'use strict';

describe('Controller: SortFullNameCtrl', function () {

  // load the controller's module
  beforeEach(module('jsonDataProcessingLabApp'));

  var SortFullNameCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SortFullNameCtrl = $controller('SortFullNameCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
