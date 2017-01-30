'use strict';

describe('Controller Tests', function() {

    describe('EdmsDownload Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockEdmsDownload, MockEdmsLocation, MockServiceResp;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockEdmsDownload = jasmine.createSpy('MockEdmsDownload');
            MockEdmsLocation = jasmine.createSpy('MockEdmsLocation');
            MockServiceResp = jasmine.createSpy('MockServiceResp');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'EdmsDownload': MockEdmsDownload,
                'EdmsLocation': MockEdmsLocation,
                'ServiceResp': MockServiceResp
            };
            createController = function() {
                $injector.get('$controller')("EdmsDownloadOcrDataDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'ocrApiGatewayApp:edmsDownloadUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
