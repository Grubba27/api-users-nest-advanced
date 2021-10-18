import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UsersService from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Post()
  public create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get(':userName')
  public getUserByName(@Param('userName') userName: string) {
    return this.userService.findUserByName(userName);
  }
}
