'use strict';
angular.module('flickrsearchApp')
.controller('ListController', ['$scope', '$http', 'angularGridInstance',function($scope, $http, angularGridInstance){

   $scope.Searching = false;
   $scope.firstTime = true;
   $scope.refresh = function(){
            angularGridInstance.gallery.refresh();
            $scope.firstTime = true; 
            $scope.results = [];  
            $scope.searchTerm = '';
     };

    $scope.search = function(){
        $scope.results = [];
        $scope.firstTime=false;
        $scope.Searching = true;
        
        $http({
            method: 'GET',
            url: 'https://api.flickr.com/services/rest',
            params: {
                method: 'flickr.photos.search',
                api_key: '1dfbed40745d1f76dc935c78c30abf16',
                text: $scope.searchTerm,
                safe_search: '1',
                per_page: '50',
                format: 'json',
                nojsoncallback: 1
            }
        }).then(function successCallback(getback){
            $scope.results = getback;
            $scope.Searching = false;

            
            console.log($scope.results);

        },function errorCallback() {
            console.error('error');
            $scope.Searching = false;
        }
    );
    };  

 }]);
