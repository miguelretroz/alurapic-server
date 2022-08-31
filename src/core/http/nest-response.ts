import { HttpStatus } from '@nestjs/common';

export class NestResponse {
  status: HttpStatus;
  headers: object;
  body: object;

  constructor(response: NestResponse) {
    Object.assign(this, response);
  }
}
