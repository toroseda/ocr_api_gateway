(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('EdmsResponseOcrDataDetailController', EdmsResponseOcrDataDetailController);

    EdmsResponseOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'EdmsResponse', 'EdmsLocation'];

    function EdmsResponseOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, EdmsResponse, EdmsLocation) {
        var vm = this;

        vm.edmsResponse = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGatewayApp:edmsResponseUpdate', function(event, result) {
            vm.edmsResponse = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
