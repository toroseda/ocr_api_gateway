(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('EdmsLocationOcrDataDetailController', EdmsLocationOcrDataDetailController);

    EdmsLocationOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'EdmsLocation', 'EdmsDownload'];

    function EdmsLocationOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, EdmsLocation, EdmsDownload) {
        var vm = this;

        vm.edmsLocation = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:edmsLocationUpdate', function(event, result) {
            vm.edmsLocation = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
