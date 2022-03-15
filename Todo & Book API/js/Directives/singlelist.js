app.directive('singlelist',function(){
    return{
        restrict: 'E',
        scope:{
            mylist: '='
        },
        templateUrl:'js/Directives/singlelist.html'
    }
})