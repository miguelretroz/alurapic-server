import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  public create(userData) {
    this.users.push(userData);

    return userData;
  }
}
