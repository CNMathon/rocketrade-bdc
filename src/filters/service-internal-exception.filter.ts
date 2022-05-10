import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { SYSTEM_ERROR_CODE } from 'src/utils/error-code';

@Catch(TypeError)
export class ServiceInternalExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(503).json({
      code: SYSTEM_ERROR_CODE.SYSTEM_ERROR,
      message: '服务内部错误',
      data: null,
    });

    console.error(exception);
  }
}
