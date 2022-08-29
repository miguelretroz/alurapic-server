import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  public create(userData: IUser): IUser {
    userData.id = this.users.length + 1;
    userData.registerAt = new Date();

    this.users.push(userData);

    return userData;
  }
}
