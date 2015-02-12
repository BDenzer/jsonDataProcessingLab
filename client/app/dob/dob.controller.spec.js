'use strict';

describe('Controller: dobCtrl', function () {

  // load the controller's module
  beforeEach(module('jsonDataProcessingLabApp'));
  beforeEach(module('socketMock'));

  var dobCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/student')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    dobCtrl = $controller('dobCtrl', {
      $scope: scope
    });
  }));

  it('should pass', function(){
    expect(true).toEqual(true);
  })
});
