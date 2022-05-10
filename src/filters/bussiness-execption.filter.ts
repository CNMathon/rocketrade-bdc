import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BussinessException } from 'src/errors/bussiness-exception';
import { Response } from 'express';

@Catch(BussinessException)
export class BussinessExecptionFilter implements ExceptionFilter {
  catch(exception: BussinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatusCode();
    const code = exception.getExceptionCode();
    const message = exception.getErrorMessage();

    response.status(status).json({
      code,
      message,
      data: null,
    });
  }
}
