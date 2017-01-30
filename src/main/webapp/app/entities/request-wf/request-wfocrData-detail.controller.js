(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('RequestWfOcrDataDetailController', RequestWfOcrDataDetailController);

    RequestWfOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RequestWf'];

    function RequestWfOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, RequestWf) {
        var vm = this;

        vm.requestWf = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:requestWfUpdate', function(event, result) {
            vm.requestWf = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
