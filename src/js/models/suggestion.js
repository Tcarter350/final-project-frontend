angular.module('finalProject')
  .factory('Suggestion', Suggestion);

Suggestion.$inject = ['$resource', 'API_URL'];
function Suggestion($resource, API_URL) {
  return new $resource(`${API_URL}/suggestions/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
