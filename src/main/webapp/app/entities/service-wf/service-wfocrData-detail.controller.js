(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('ServiceWfOcrDataDetailController', ServiceWfOcrDataDetailController);

    ServiceWfOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ServiceWf'];

    function ServiceWfOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, ServiceWf) {
        var vm = this;

        vm.serviceWf = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:serviceWfUpdate', function(event, result) {
            vm.serviceWf = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
