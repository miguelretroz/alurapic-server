import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from './user.service';

@Injectable()
@ValidatorConstraint()
export class IsUserNameUniqueConstraint
  implements ValidatorConstraintInterface
{
  constructor(private userService: UserService) {}

  validate(
    userName: string,
    _args?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return !this.userService.getByName(userName);
  }
}

export function IsUserNameUnique(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserNameUniqueConstraint,
    });
  };
}
