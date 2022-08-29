import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async create(@Body() userData) {
    const newUser = await this.userService.create(userData);

    return newUser;
  }
}
