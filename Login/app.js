// app.js
var app = angular.module('loginApp', []);

app.controller('LoginController', function($scope) {
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.errorMessage = '';

  $scope.login = function() {
    // Simple check for demonstration
    if ($scope.user.username === 'admin' && $scope.user.password === 'password123') {
      $scope.errorMessage = ''; // Clear any previous error
      console.log('Login successful!'); // You can replace this with a redirect or further logic
    } else {
      $scope.errorMessage = 'Invalid username or password!';
    }
  };
});
