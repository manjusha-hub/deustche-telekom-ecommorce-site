// cart.service.ts
export class CartService {
    constructor() {
        this.cartItems = [];
    }
    // Get all cart items
    getCartItems() {
        return this.cartItems;
    }
    // Add a product to the cart
    addToCart(product) {
        this.cartItems.push(product);
    }
    // Remove a product from the cart
    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
    }
    // Get total price of the cart
    getTotalPrice() {
        return this.cartItems.reduce((total, product) => total + product.price, 0);
    }
}
