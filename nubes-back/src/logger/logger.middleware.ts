import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const statusCodeColor =
        res.statusCode === 200 ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
      switch (req.method) {
        case 'GET':
          console.log(
            statusCodeColor,
            `${req.method} ${req.url} ${res.statusCode}`,
          );
          break;
        case 'POST':
          console.log(
            statusCodeColor,
            `${req.method} ${req.url} ${res.statusCode}`,
          );
          break;
        case 'PATCH':
          console.log(
            statusCodeColor,
            `${req.method} ${req.url} ${res.statusCode}`,
          );
          break;
        case 'DELETE':
          console.log(
            statusCodeColor,
            `${req.method} ${req.url} ${res.statusCode}`,
          );
          break;
        default:
          console.log(
            statusCodeColor,
            `${req.method} ${req.url} ${res.statusCode}`,
          );
      }
    });
    res.on('error', (err) => {
      console.error('Response error...', err);
    });
    next();
  }
}
