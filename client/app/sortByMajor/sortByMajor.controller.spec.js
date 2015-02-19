'use strict';

describe('Controller: SortByMajorCtrl', function () {

  // load the controller's module
  beforeEach(module('jsonDataProcessingLabApp'));

  var SortByMajorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SortByMajorCtrl = $controller('SortByMajorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
