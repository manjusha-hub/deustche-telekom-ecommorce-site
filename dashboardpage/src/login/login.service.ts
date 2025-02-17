export class LoginService {
    // Hardcoded users for demo purposes
    private users: { username: string, password: string }[];
  
    constructor() {
      this.users = [
        { username: 'admin', password: 'admin' },
        { username: 'user', password: 'user123' },
      ];
    }
  
    authenticate(username: string, password: string): boolean {
      // Check if the username and password match any hardcoded user
      return this.users.some(
        (user) => user.username === username && user.password === password
      );
    }
  }
  