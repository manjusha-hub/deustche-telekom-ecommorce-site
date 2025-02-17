export class CartComponent {
    constructor(cartService) {
        this.cartItems = [];
        this.cartService = cartService;
    }
    init() {
        this.cartItems = this.cartService.getCartItems();
        this.renderCartItems();
    }
    // Render the list of cart items
    renderCartItems() {
        const cartTable = document.querySelector('#cartTable');
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
                const button = document.querySelector(`[data-id="${item.id}"]`);
                if (button) {
                    button.addEventListener('click', () => this.removeItemFromCart(item));
                }
            });
        }
    }
    // Remove item from the cart
    removeItemFromCart(item) {
        this.cartService.removeFromCart(item.id);
        this.cartItems = this.cartService.getCartItems();
        this.renderCartItems();
    }
    // Get total price and display it
    displayTotalPrice() {
        const totalPrice = this.cartService.getTotalPrice();
        const totalElement = document.querySelector('#totalPrice');
        if (totalElement) {
            totalElement.textContent = `Total Price: ₹${totalPrice}`;
        }
    }
}
