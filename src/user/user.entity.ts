import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserNameUnique } from './isUserNameUnique.validator';

export class User {
  id: number;

  // name
  @IsUserNameUnique({
    message: 'name already registered',
  })
  @IsNotEmpty({
    message: 'name is required.',
  })
  @IsString({
    message: 'name must be string.',
  })
  name: string;

  // email
  @IsEmail({
    message: 'invalid email',
  })
  email: string;

  // password
  @IsNotEmpty({
    message: 'password is required',
  })
  @IsString({
    message: 'password must be string',
  })
  password: string;

  //fullName
  @IsNotEmpty({
    message: 'fullName is required',
  })
  @IsString({
    message: 'fullName must be string',
  })
  fullName: string;

  // registerAt
  registerAt: Date;
}
