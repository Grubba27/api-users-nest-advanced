import { NestResponse } from './nest.response';
import { HttpStatus } from '@nestjs/common';

export class NestResponseBuilder {
  private res: {
    headers: Record<string, unknown>;
    body: Record<string, unknown>;
    status: number;
  } = {
    status: 200,
    headers: {},
    body: {},
  };

  public status(statusCode: HttpStatus): NestResponseBuilder {
    this.res.status = statusCode;
    return this;
  }

  public headers(headerName: string, headerValue: string): NestResponseBuilder {
    this.res.headers = { headerName: headerValue, ...this.res.headers };
    return this;
  }

  public body(body: any): NestResponseBuilder {
    this.res.body = body;
    return this;
  }

  public build() {
    return new NestResponse(this.res);
  }
}
