// store.service.ts
export class StoreService {
    // Simulate checking credentials against a database
    validateCredentials(email: string, password: string): boolean {
      const validEmail = 'test@example.com';   // Sample valid email
      const validPassword = 'password';        // Sample valid password
  
      // Simple credential validation
      return email === validEmail && password === validPassword;
    }
  }
  