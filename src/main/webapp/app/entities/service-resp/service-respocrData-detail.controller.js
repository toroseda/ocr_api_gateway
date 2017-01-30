(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('ServiceRespOcrDataDetailController', ServiceRespOcrDataDetailController);

    ServiceRespOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'ServiceResp', 'ServiceWf'];

    function ServiceRespOcrDataDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, ServiceResp, ServiceWf) {
        var vm = this;

        vm.serviceResp = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:serviceRespUpdate', function(event, result) {
            vm.serviceResp = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
