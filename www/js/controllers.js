angular.module('building-blocks.controllers', [])

.controller('HomeController', function($scope, News) {
   $scope.news = News.query();
})

.controller('MessageController', function($scope) {
   $scope.helpRequest = function() {
     $scope.help_request.title = $scope.title;
     $scope.help_request.message = $scope.message;
     $scope.help_request.urgent = $scope.urgent;
     $scope.help_request = Help_requests.save($scope.help_request);
   }
});
