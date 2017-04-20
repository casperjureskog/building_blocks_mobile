angular.module('building-blocks.controllers', [])

.controller('HomeController', function($scope, News) {
  $scope.news = News.query();
})

.controller('HelpRequestController', function($scope, HelpRequest) {
  $scope.error = null;
  $scope.help_request = {};


  $scope.createHelpRequest = function() {
    HelpRequest.save($scope.help_request, function(response){
      console.log(response);
      $scope.message = response.message;
      // Move on to another page or whatever you want to do
    }, function(error){
      // This error handler needs to be refactored before PR. This is cruede
      $scope.error = error.data.message;
    });
  }
});
