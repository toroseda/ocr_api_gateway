(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .factory('ServiceWfSearch', ServiceWfSearch);

    ServiceWfSearch.$inject = ['$resource'];

    function ServiceWfSearch($resource) {
        var resourceUrl =  'api/_search/service-wfs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
