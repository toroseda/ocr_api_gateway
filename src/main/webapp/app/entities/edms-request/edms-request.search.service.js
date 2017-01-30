(function() {
    'use strict';

    angular
        .module('ocrApiGatewayApp')
        .factory('EdmsRequestSearch', EdmsRequestSearch);

    EdmsRequestSearch.$inject = ['$resource'];

    function EdmsRequestSearch($resource) {
        var resourceUrl =  'api/_search/edms-requests/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
