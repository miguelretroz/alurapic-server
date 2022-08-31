import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { NestResponse } from './nest-response';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((controllerResponse: NestResponse) => {
        if (controllerResponse instanceof NestResponse) {
          const httpContext = context.switchToHttp();
          const response = httpContext.getResponse();
          const { headers, body, status } = controllerResponse;

          Object.entries(headers).forEach(([key, value]) => {
            this.httpAdapter.setHeader(response, key, JSON.stringify(value));
          });

          this.httpAdapter.status(response, status);

          return body;
        }

        return controllerResponse;
      }),
    );
  }
}
