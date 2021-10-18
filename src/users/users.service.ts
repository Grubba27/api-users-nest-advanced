import { Injectable } from '@nestjs/common';

@Injectable()
export default class UsersService {
  private users = [];

  public create(user) {
    this.users.push(user);
    return user;
  }
}
