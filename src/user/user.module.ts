import { Module } from '@nestjs/common';
import { IsUserNameUniqueConstraint } from './isUserNameUnique.validator';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, IsUserNameUniqueConstraint],
})
export class UserModule {}
