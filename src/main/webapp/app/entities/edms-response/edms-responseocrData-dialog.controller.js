(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .controller('EdmsResponseOcrDataDialogController', EdmsResponseOcrDataDialogController);

    EdmsResponseOcrDataDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'EdmsResponse', 'EdmsLocation'];

    function EdmsResponseOcrDataDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, EdmsResponse, EdmsLocation) {
        var vm = this;

        vm.edmsResponse = entity;
        vm.clear = clear;
        vm.save = save;
        vm.edmslocations = EdmsLocation.query({filter: 'edmsresponse-is-null'});
        $q.all([vm.edmsResponse.$promise, vm.edmslocations.$promise]).then(function() {
            if (!vm.edmsResponse.edmsLocationId) {
                return $q.reject();
            }
            return EdmsLocation.get({id : vm.edmsResponse.edmsLocationId}).$promise;
        }).then(function(edmsLocation) {
            vm.edmslocations.push(edmsLocation);
        });

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.edmsResponse.id !== null) {
                EdmsResponse.update(vm.edmsResponse, onSaveSuccess, onSaveError);
            } else {
                EdmsResponse.save(vm.edmsResponse, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('ocrApiGatewayApp:edmsResponseUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
