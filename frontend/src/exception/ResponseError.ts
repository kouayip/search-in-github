export class ResponseError extends Error {
  constructor(
    message: string,
    public code: number,
    public response: Response,
    public responseText: string
  ) {
    super(message);
  }
}
