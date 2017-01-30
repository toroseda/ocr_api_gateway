(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('OcrSessionOcrDataDetailController', OcrSessionOcrDataDetailController);

    OcrSessionOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'OcrSession', 'SessionWf', 'EdmsRequest'];

    function OcrSessionOcrDataDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, OcrSession, SessionWf, EdmsRequest) {
        var vm = this;

        vm.ocrSession = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:ocrSessionUpdate', function(event, result) {
            vm.ocrSession = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
