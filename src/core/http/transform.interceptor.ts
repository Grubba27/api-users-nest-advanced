import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { NestResponse } from './nest.response';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  httpAdapter: AbstractHttpAdapter;

  constructor(adpterHost: HttpAdapterHost) {
    this.httpAdapter = adpterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((res: NestResponse) => {
        if (res instanceof NestResponse) {
          const ctx = context.switchToHttp();
          const response = ctx.getResponse();
          const { headers, status, body } = res;

          const headersNames = Object.getOwnPropertyNames(headers);

          headersNames.forEach((name) => {
            const values = headers[name];
            if (typeof values === 'string') {
              this.httpAdapter.setHeader(response, name, values);
            }
          });
          this.httpAdapter.status(response, status);
          return body;
        }
        return res;
      }),
    );
  }
}
