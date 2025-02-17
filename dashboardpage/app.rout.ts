// src/app/app.routing.ts

// Define the AngularJS app and its dependencies
angular.module('app', ['ngRoute']) // Adding 'ngRoute' for routing
  .config(($routeProvider: any) => {  // 'any' to bypass type checking
    $routeProvider
      .when('/login', {
        templateUrl: 'login/login.component.html',
        controller: 'login.component'
      })
      .when('/products', {
        templateUrl: 'product/product.component.html',
        controller: ' product.component'
      })
      .when('/onlineshoping', {
        templateUrl: 'onlineshopping/store.component.html',
        controller: 'store.component'
      })
      .otherwise({
        redirectTo: '/login'  // Default route
      });
  });
