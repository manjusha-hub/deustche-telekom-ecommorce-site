// login.module.ts
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

export class LoginModule {
  private loginComponent: LoginComponent;
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
    this.loginComponent = new LoginComponent();
  }

  // Initialize the login component
  init(): void {
    this.loginComponent.render();
  }
}
