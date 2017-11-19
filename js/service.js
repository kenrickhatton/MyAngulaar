angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
       
         UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        }
        return UserAPIService;
    })

angular.module('TodoService', [])
    .factory('TodoAPIService', function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                 header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header);
            },
            createTodo: function(url, data, token) {
                 header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            },
            editTodo: function(url, data, token) {
                 header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteTodo: function(url, token) {
                 header = "Authorization: JWT " + token;
                return $http.delete(url, token, header);
            }
        }
        return TodoAPIService;
    });
/*});And that’s it! Notice how in this case we could manually and safely remove our test obj from local storage by right-clicking it in the dev-tools and choosing ‘delete’. If we wished to remove it using code, we could have used:

store.remove("obj");*/