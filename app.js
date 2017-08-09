
var app = angular.module('redditApp', []);

app.controller('redditController', function ($scope, $http) {
  $scope.posts = [];  

  var url = 'https://www.reddit.com/r/aww/top.json';
  
  $http.get(url).then(function(response) {
    $scope.posts = response.data.data.children;
    console.log(response.data.data.children);
}); 

  $scope.posts = $http.get(url);

});



