import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse<Response>();
    const request: Request = ctx.getRequest<Request>();

    const status: number = exception.getStatus();
    const res: string | object = exception.getResponse();
    this.logger.error(res);

    response?.status(status)?.json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: res['message'],
    });
  }
}
