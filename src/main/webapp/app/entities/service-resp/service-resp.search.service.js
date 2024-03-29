(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .factory('ServiceRespSearch', ServiceRespSearch);

    ServiceRespSearch.$inject = ['$resource'];

    function ServiceRespSearch($resource) {
        var resourceUrl =  'api/_search/service-resps/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
