angular.module('building-blocks.services', [])

.factory('News', function($resource, API_URL) {
  return $resource(API_URL + '/news', {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
})

.factory('HelpRequest', function($resource, API_URL) {
  return $resource(API_URL + '/help_requests', {}, {
    save: {
      method: 'POST'
        }
  });
});
