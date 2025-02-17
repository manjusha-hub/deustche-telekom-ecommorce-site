// product.controller.js
app.controller('ProductController', ['$scope', function($scope) {
    // Initialize product list
    $scope.products = [];

    // Initialize form fields
    $scope.productName = 'laptop';
    $scope.price = '25000';
    $scope.img = '';

    // Function to register the product
    $scope.registerProduct = function() {
        if ($scope.productName && $scope.price) {
            // Create new product object
            var newProduct = {
                id: $scope.products.length + 1,
                productName: $scope.productName,
                price: parseFloat($scope.price),
                img: $scope.img || ''
            };

            // Add the new product to the list
            $scope.products.push(newProduct);

            // Reset form fields
            $scope.productName = '';
            $scope.price = '';
            $scope.img = '';
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to add product to shopping cart
    $scope.addProductToShopingCard = function(productId) {
        var productToAdd = $scope.products.find(function(product) {
            return product.id === productId;
        });
        //alert('Added to shopping cart: ' + productToAdd.productName);
        console.log("welcome to shopping cart" );
    };
}]);
