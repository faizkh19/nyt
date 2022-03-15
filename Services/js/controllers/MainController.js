app.controller('MainController',['$scope','nyt',function($scope,nyt){
    $scope.list = [];

    nyt.then(function(response){
        for (let i = 0; i < response.results.length; i++){
            var story = {
                title: response.results[i].title,
                abstract: response.results[i].abstract,
                url: response.results[i].url
            }
            $scope.list.push(story);
        }
    })
}]);