// Import the LoginService class (make sure this file is in the same directory)
import { LoginService } from './login.service';

export class LoginComponent {
  private loginService: LoginService;

  // User model to bind data (username, password)
  user: { username: string, password: string };
  errorMessage: string;

  constructor() {
    this.loginService = new LoginService();
    this.user = { username: '', password: '' }; // Initialize user object
    this.errorMessage = '';
  }

  // Method to handle form submission
  login(): void {
    const { username, password } = this.user;

    // Call the LoginService to authenticate the user
    if (this.loginService.authenticate(username, password)) {
      this.errorMessage = '';
      // Add logic for successful login (e.g., redirect or show welcome message)
      alert('Login successful');
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  // Render method to create the login form dynamically
  render(): void {
    // Create login form HTML
    const formHtml = `
      <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <p id="errorMessage" class="error">${this.errorMessage}</p>
        </form>
      </div>
    `;

    // Inject the form HTML into the document
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.innerHTML = formHtml;
    }

    // Add event listener for form submission
    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        const usernameInput = (document.getElementById('username') as HTMLInputElement);
        const passwordInput = (document.getElementById('password') as HTMLInputElement);
        this.user.username = usernameInput.value;
        this.user.password = passwordInput.value;
        this.login(); // Handle the login logic
      });
    }
  }
}
