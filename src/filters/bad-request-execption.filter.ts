import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';
import { CLIENT_ERROR_CODE } from 'src/utils/error-code';

@Catch(BadRequestException)
export class BadRequestExecptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { statusCode, message: exceptionMessage } = exception.response;

    let code: CLIENT_ERROR_CODE = CLIENT_ERROR_CODE.CLIENT_ERROR;
    let message = exceptionMessage;

    if (Array.isArray(exceptionMessage)) {
      const messageList = exceptionMessage as string[];
      const firstMessageInfo = messageList[0];

      const IS_REQUIRED_PARAMETER_NOT_PASSED = firstMessageInfo.includes(
        'should not be empty',
      );
      const IS_PARAMETER_TYPE_ERROR = firstMessageInfo.includes('must be a');

      if (IS_REQUIRED_PARAMETER_NOT_PASSED) {
        const parameterName = firstMessageInfo.split(' should not be empty')[0];

        message = `传参${parameterName}不应为空！`;
        code = CLIENT_ERROR_CODE.REQUIRED_PARAMETER_NOT_PASSED;
      } else if (IS_PARAMETER_TYPE_ERROR) {
        const parameterName = firstMessageInfo.split(' must be a ')[0];

        message = `传参${parameterName}类型错误！`;
        code = CLIENT_ERROR_CODE.PARAMETER_TYPE_ERROR;
      } else {
        message = firstMessageInfo;
      }
    }

    response.status(statusCode).json({
      code,
      message,
      data: null,
    });
  }
}
