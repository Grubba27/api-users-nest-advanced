import { Injectable } from '@nestjs/common';
import { User, Users } from './users.entity';

@Injectable()
export default class UsersService {
  private users: Users;

  public create(user: User): User {
    this.users.push(user);
    return user;
  }
}
