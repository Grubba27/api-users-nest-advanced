export class User {
  id: number;

  firstName: string;
  lastName: string;
  fullName: string;

  email: string;
  password: string;

  entryDate: Date;
}

export class Users extends Array implements Array<User> {
}
