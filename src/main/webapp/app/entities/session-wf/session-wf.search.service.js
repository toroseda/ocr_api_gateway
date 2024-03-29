(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .factory('SessionWfSearch', SessionWfSearch);

    SessionWfSearch.$inject = ['$resource'];

    function SessionWfSearch($resource) {
        var resourceUrl =  'api/_search/session-wfs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
