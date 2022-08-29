export class UserService {
  private users = [];

  public create(userData) {
    this.users.push(userData);

    return userData;
  }
}
