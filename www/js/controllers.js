angular.module('building-blocks.controllers', [])

.controller('HomeController', function($scope, News) {
   $scope.news = News.query();
})

.controller('MessageController', function($scope, Help_requests) {

});
