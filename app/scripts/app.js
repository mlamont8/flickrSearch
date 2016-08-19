'use strict';

/**
 * @ngdoc overview
 * @name flickrsearchApp
 * @description
 * # flickrsearchApp
 *
 * Main module of the application.
 */
angular
  .module('flickrsearchApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngMaterial'
  ]);
  /*.controller('ListController', ['$scope', '$http',function($scope, $http){
   $scope.results = [];
    $scope.search = function(){
        $http({
            method: 'GET',
            url: "https://api.flickr.com/services/rest",
            params: {
                method: 'flickr.photos.search',
                api_key: '1dfbed40745d1f76dc935c78c30abf16',
                text: $scope.searchTerm,
                format: 'json',
                nojsoncallback: 1
            }
        }).then(function successCallback(data){
            $scope.results = data;
            console.log($scope.results);
        },function errorCallback(error) {
            console.error('error');
        }
    );
    };  
     
 }]);
*/