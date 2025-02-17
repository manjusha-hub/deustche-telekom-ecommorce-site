export class StoreComponent {
    constructor(storeService) {
        this.email = '';
        this.password = '';
        this.message = '';
        this.storeService = storeService; // Inject storeService into the component
    }
    // Initialize the component and bind events
    init() {
        const loginButton = document.getElementById('btnLogin');
        loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener('click', () => this.login());
    }
    // Simulate the login logic
    login() {
        // Get email and password values from the form
        this.email = document.getElementById('email').value;
        this.password = document.getElementById('password').value;
        // Delegate validation to the storeService
        if (this.storeService.validateCredentials(this.email, this.password)) {
            this.message = 'Login successful!';
            this.displayMessage();
        }
        else {
            this.message = 'Login failed! Please check your credentials.';
            this.displayMessage();
        }
    }
    // Display message below the form
    displayMessage() {
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = this.message;
        }
    }
}
