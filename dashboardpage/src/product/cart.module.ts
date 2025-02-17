// cart.module.ts
import { CartService } from './cart.service';
import { CartComponent } from './cart.component';

export class CartModule {
  private cartService: CartService;
  private cartComponent: CartComponent;

  constructor() {
    // Initialize the CartService and CartComponent
    this.cartService = new CartService();
    this.cartComponent = new CartComponent(this.cartService);
  }

  // Initialize the cartComponent
  init(): void {
    this.cartComponent.init(); // Initialize the CartComponent
  }
}
