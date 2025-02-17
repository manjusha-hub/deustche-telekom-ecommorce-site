// store.component.ts
import { StoreService } from './store.service';

export class StoreComponent {
  private email: string = '';
  private password: string = '';
  private message: string = '';
  private storeService: StoreService;

  constructor(storeService: StoreService) {
    this.storeService = storeService;  // Inject storeService into the component
  }

  // Initialize the component and bind events
  init(): void {
    const loginButton = document.getElementById('btnLogin') as HTMLButtonElement;
    loginButton?.addEventListener('click', () => this.login());
  }

  // Simulate the login logic
  private login(): void {
    // Get email and password values from the form
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (document.getElementById('password') as HTMLInputElement).value;

    // Delegate validation to the storeService
    if (this.storeService.validateCredentials(this.email, this.password)) {
      this.message = 'Login successful!';
      this.displayMessage();
    } else {
      this.message = 'Login failed! Please check your credentials.';
      this.displayMessage();
    }
  }

  // Display message below the form
  private displayMessage(): void {
    const messageElement = document.getElementById('message') as HTMLLabelElement;
    if (messageElement) {
      messageElement.textContent = this.message;
    }
  }
}
