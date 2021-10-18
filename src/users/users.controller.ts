import { Body, Controller, Post } from '@nestjs/common';
import UsersService from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  public create(@Body() user: User) {
    const createdUser = this.userService.create(user);
    return createdUser;
  }
}
