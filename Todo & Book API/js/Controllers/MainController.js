app.controller('MainController',['$scope','$http', function($scope, $http){
    $scope.todo = {
        title: "Things I need To Do",
        list: ["Clean Room","Go to Store","Study Coding"]
    }

    $scope.books={
        title: "Books I need To Buy",
        list:[]
    }
   
    function hasOnlyNumbers(item){
        return /^[0-9]*$/.test(item)
    }

    $scope.addItem = function(itemList,item){
        //checking if the number matches isbn criteria
        if((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)){
            console.log("ISBN");
            // Getting Data from the google apis
            // .success() is deprecated so use .then() to get data but we have to use response.data to get data. 
            $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).then(function(response){    
            //adding book details received from json file to itemlist, example json file: https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699
                itemList.push("Title: " + response.data.items[0].volumeInfo.title + " // Author(s): "+ response.data.items[0].volumeInfo.authors);
            },function(err){
                console.log("Error: " + err.statusText);
            });
            
        }else{
            console.log("Not ISBN");
            itemList.push(item);
        }
    }
}])