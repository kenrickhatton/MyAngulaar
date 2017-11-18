angular.module('UserService', [])
    .factory('UserAPIService', function($http) {

        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });And that’s it! Notice how in this case we could manually and safely remove our test obj from local storage by right-clicking it in the dev-tools and choosing ‘delete’. If we wished to remove it using code, we could have used:

store.remove("obj");