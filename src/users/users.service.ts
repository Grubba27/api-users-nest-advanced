import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, Users } from './users.entity';

@Injectable()
export default class UsersService {
  private users: Users;

  public create(user: User): User {
    this.users.push(user);
    return user;
  }

  public findUserByName(userName: string): Users {
    const foundUser = this.users.filter((user: User) => {
      return (
        user.firstName === userName ||
        user.lastName === userName ||
        user.fullName === userName
      );
    });

    if (foundUser) {
      return foundUser;
    } else {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

  }
}
