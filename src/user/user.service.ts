import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  public create(userData: User): User {
    userData.id = this.users.length + 1;
    userData.registerAt = new Date();

    this.users.push(userData);

    return userData;
  }

  public getByName(username: string): User {
    const user = this.users.find(({ name }) =>
      name?.toUpperCase()?.includes(username?.toUpperCase()),
    );

    return user;
  }
}
