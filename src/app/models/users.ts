interface User {
    userId: number;
    name: string;
    email: string;
    password: string;
    city: string;
}

export class Users implements User {
    
    userId = 0;
    name = '';
    email = '';
    password = '';
    city = '';

    constructor() {}
}
