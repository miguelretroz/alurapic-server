import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async create(@Body() userData: User): Promise<User> {
    const newUser = await this.userService.create(userData);

    return newUser;
  }

  @Get('/:username')
  public getByName(@Param('username') username: string): User {
    const user = this.userService.getByName(username);

    return user;
  }
}
