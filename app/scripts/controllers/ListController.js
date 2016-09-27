'use strict';
angular.module('flickrsearchApp')
.controller('ListController', ['$scope', '$http',function($scope, $http){
   $scope.results = [];
   $scope.Searching = false;
   $scope.firstTime = true;
    $scope.search = function(){
        $scope.firstTime=false;
        $scope.Searching = true;
        $http({
            method: 'GET',
            url: 'https://api.flickr.com/services/rest',
            params: {
                method: 'flickr.photos.search',
                api_key: '1dfbed40745d1f76dc935c78c30abf16',
                text: $scope.searchTerm,
                format: 'json',
                nojsoncallback: 1
            }
        }).then(function successCallback(getback){
            $scope.results = getback;
            $scope.Searching = false;

        },function errorCallback() {
            console.error('error');
            $scope.Searching = false;
        }
    );
    };  
     
 }]);
