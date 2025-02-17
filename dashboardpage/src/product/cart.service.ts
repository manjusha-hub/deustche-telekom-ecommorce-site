// cart.service.ts
export class CartService {
    private cartItems: any[] = [];
  
    // Get all cart items
    getCartItems(): any[] {
      return this.cartItems;
    }
  
    // Add a product to the cart
    addToCart(product: any): void {
      this.cartItems.push(product);
    }
  
    // Remove a product from the cart
    removeFromCart(productId: number): void {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    }
  
    // Get total price of the cart
    getTotalPrice(): number {
      return this.cartItems.reduce((total, product) => total + product.price, 0);
    }
  }
  