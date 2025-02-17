// cart.component.ts
import { CartService } from './cart.service';

export class CartComponent {
  private cartService: CartService;
  private cartItems: any[] = [];

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  init(): void {
    this.cartItems = this.cartService.getCartItems();
    this.renderCartItems();
  }

  // Render the list of cart items
  renderCartItems(): void {
    const cartTable = document.querySelector('#cartTable') as HTMLTableElement;
    if (cartTable) {
      cartTable.innerHTML = ''; // Clear the current content

      // Generate new table rows for each cart item
      this.cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.id}</td>
          <td><img src="${item.img}" height="90px" alt="Product Image"></td>
          <td>${item.productName}</td>
          <td>${item.price} ₹</td>
          <td><button class="remove-from-cart" data-id="${item.id}">Remove</button></td>
        `;
        cartTable.appendChild(row);
      });

      // Add event listeners for the "Remove" buttons
      this.cartItems.forEach(item => {
        const button = document.querySelector(`[data-id="${item.id}"]`) as HTMLButtonElement;
        if (button) {
          button.addEventListener('click', () => this.removeItemFromCart(item));
        }
      });
    }
  }

  // Remove item from the cart
  removeItemFromCart(item: any): void {
    this.cartService.removeFromCart(item.id);
    this.cartItems = this.cartService.getCartItems();
    this.renderCartItems();
  }

  // Get total price and display it
  displayTotalPrice(): void {
    const totalPrice = this.cartService.getTotalPrice();
    const totalElement = document.querySelector('#totalPrice');
    if (totalElement) {
      totalElement.textContent = `Total Price: ₹${totalPrice}`;
    }
  }
}
