export class LoginService {
    constructor() {
        this.users = [
            { username: 'admin', password: 'admin' },
            { username: 'user', password: 'user123' },
        ];
    }
    authenticate(username, password) {
        // Check if the username and password match any hardcoded user
        return this.users.some((user) => user.username === username && user.password === password);
    }
}
