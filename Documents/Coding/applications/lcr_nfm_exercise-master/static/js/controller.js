var myApp = angular.module("myApp", []);

myApp.controller("projectsController", ["$scope", "$http", function ($scope, $http)
  {
    $scope.interests = {}

    $http.get("/js/projects.json").success (function(data) {
      $scope.projects = data.projects;
    })
    $scope.addInterest = function (title) {
      $scope.interests[title] = true;
    }
    $scope.removeInterest = function(title) {
      delete $scope.interests[title];
    }

  }])
