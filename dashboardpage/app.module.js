// app.module.js

// Define the main AngularJS app module
angular.module('app', ['loginModule', 'productModule', 'onlineshoppingModule'])
  .controller('MainController', function($scope) {
    // Controller for the main app logic (if needed in the future)
    $scope.message = 'Welcome to the Online Shopping App!';
  });
