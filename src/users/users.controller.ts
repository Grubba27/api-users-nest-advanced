import { Body, Controller, Post } from '@nestjs/common';
import UsersService from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  public create(@Body() user) {
    const createdUser = this.userService.create(user);
    return createdUser;
  }
}
