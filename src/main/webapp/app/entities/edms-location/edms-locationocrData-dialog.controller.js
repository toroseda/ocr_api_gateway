(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('EdmsLocationOcrDataDialogController', EdmsLocationOcrDataDialogController);

    EdmsLocationOcrDataDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'EdmsLocation', 'EdmsDownload'];

    function EdmsLocationOcrDataDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, EdmsLocation, EdmsDownload) {
        var vm = this;

        vm.edmsLocation = entity;
        vm.clear = clear;
        vm.save = save;
        vm.edmsdownloads = EdmsDownload.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.edmsLocation.id !== null) {
                EdmsLocation.update(vm.edmsLocation, onSaveSuccess, onSaveError);
            } else {
                EdmsLocation.save(vm.edmsLocation, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('ocrApiGatewayApp:edmsLocationUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
