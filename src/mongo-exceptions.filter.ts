import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.FOUND;
    switch (exception.code) {
      case 11000:
        // duplicate exception
        response.status(status).json({
          statusCode: HttpStatus.FOUND,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
    }
  }
}
