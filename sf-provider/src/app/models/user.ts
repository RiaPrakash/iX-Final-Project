// class which specifies what our user model should look like (same as MySQL table)
export class User {
    Id: Int16Array;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
}

