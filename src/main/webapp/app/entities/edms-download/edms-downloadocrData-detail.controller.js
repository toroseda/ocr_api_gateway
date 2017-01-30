(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('EdmsDownloadOcrDataDetailController', EdmsDownloadOcrDataDetailController);

    EdmsDownloadOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'EdmsDownload', 'EdmsLocation', 'ServiceResp'];

    function EdmsDownloadOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, EdmsDownload, EdmsLocation, ServiceResp) {
        var vm = this;

        vm.edmsDownload = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:edmsDownloadUpdate', function(event, result) {
            vm.edmsDownload = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
