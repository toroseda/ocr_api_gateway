'use strict';

describe('Controller Tests', function() {

    describe('EdmsResponse Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockEdmsResponse, MockEdmsLocation;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockEdmsResponse = jasmine.createSpy('MockEdmsResponse');
            MockEdmsLocation = jasmine.createSpy('MockEdmsLocation');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'EdmsResponse': MockEdmsResponse,
                'EdmsLocation': MockEdmsLocation
            };
            createController = function() {
                $injector.get('$controller')("EdmsResponseOcrDataDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'ocrApiGatewayApp:edmsResponseUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
