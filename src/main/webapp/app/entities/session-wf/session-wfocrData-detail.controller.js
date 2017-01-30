(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('SessionWfOcrDataDetailController', SessionWfOcrDataDetailController);

    SessionWfOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SessionWf', 'OcrSession'];

    function SessionWfOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, SessionWf, OcrSession) {
        var vm = this;

        vm.sessionWf = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:sessionWfUpdate', function(event, result) {
            vm.sessionWf = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
