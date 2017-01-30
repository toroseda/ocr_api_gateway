(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('ServiceWfOcrDataDialogController', ServiceWfOcrDataDialogController);

    ServiceWfOcrDataDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ServiceWf'];

    function ServiceWfOcrDataDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ServiceWf) {
        var vm = this;

        vm.serviceWf = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.serviceWf.id !== null) {
                ServiceWf.update(vm.serviceWf, onSaveSuccess, onSaveError);
            } else {
                ServiceWf.save(vm.serviceWf, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('ocrApiGatewayApp:serviceWfUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
