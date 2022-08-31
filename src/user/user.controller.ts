import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public create(@Body() userData: User): NestResponse {
    const newUser = this.userService.create(userData);

    return new NestResponseBuilder()
      .setStatus(HttpStatus.CREATED)
      .setHeaders({
        Location: `/user/${newUser.name}`,
      })
      .setBody(newUser)
      .build();
  }

  @Get('/:username')
  public getByName(@Param('username') username: string): User {
    const user = this.userService.getByName(username);

    return user;
  }
}
