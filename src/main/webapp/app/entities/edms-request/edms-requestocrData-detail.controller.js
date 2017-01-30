(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('EdmsRequestOcrDataDetailController', EdmsRequestOcrDataDetailController);

    EdmsRequestOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'EdmsRequest', 'OcrSession', 'RequestWf', 'EdmsResponse'];

    function EdmsRequestOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, EdmsRequest, OcrSession, RequestWf, EdmsResponse) {
        var vm = this;

        vm.edmsRequest = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:edmsRequestUpdate', function(event, result) {
            vm.edmsRequest = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
