import {
  Body,
  Controller,
  Get,
  HttpStatus, NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import UsersService from './users.service';
import { User } from './users.entity';

import { NestResponse } from '../core/http/nest.response';
import { NestResponseBuilder } from '../core/http/nest.response-builder';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Post()
  public create(@Body() user: User, @Res() res): NestResponseBuilder {
    const createdUser = this.userService.create(user);
    return new NestResponseBuilder()
      .status(HttpStatus.CREATED)
      .headers('location', `/users/${createdUser.firstName}`)
      .body(createdUser);
  }

  @Get(':userName')
  public getUserByName(@Param('userName') userName: string) {
    return this.userService.findUserByName(userName);
  }
}
