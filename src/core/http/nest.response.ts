export class NestResponse {
  status: number;
  headers: Record<string, unknown>;
  body: Record<string, unknown>;

  constructor(
    private res: {
      headers: Record<string, unknown>;
      body: Record<string, unknown>;
      status: number;
    },
  ) {
    Object.assign(this, res);
  }
}
