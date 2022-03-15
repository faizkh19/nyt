app.factory('nyt', ['$http',function($http){
    return $http.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=hIWbMJqTWtU3AO7ZULWWwMU8fm9b9etz').then(function(response){
        return response.data;   
    });
}]);