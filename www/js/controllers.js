angular.module('building-blocks.controllers', [])

.controller('HomeController', function($scope, News) {
  $scope.news = News.query();
})

.controller('HelpRequestController', function($scope, $location, HelpRequest) {
  $scope.error = null;
  $scope.help_request = {};


  $scope.createHelpRequest = function() {
    HelpRequest.save($scope.help_request, function(response){
      $scope.error = null;
      $scope.message = response.message;
    }, function(error){
      $scope.error = error.data.message;
    });
  }
});
