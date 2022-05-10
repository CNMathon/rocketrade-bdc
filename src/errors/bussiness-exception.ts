import { HttpException } from '@nestjs/common';
import {
  CLIENT_ERROR_CODE,
  SYSTEM_ERROR_CODE,
  THIRD_PARTY_SERVICE_ERROR_CODE,
} from 'src/utils/error-code';

/**
 * 业务异常类
 */
export class BussinessException<T = string> extends HttpException {
  /**
   * @param {CLIENT_ERROR_CODE} exceptionCode 错误码
   * @param {string} errorMessage 错误提示信息
   * @param {number} statusCode HTTP状态码
   */
  constructor(
    public exceptionCode: T,
    public errorMessage: string,
    public statusCode: number,
  ) {
    super(
      { exceptionCode: exceptionCode, errorMessage: errorMessage },
      statusCode,
    );
  }

  /**
   * 获取错误码
   * @returns 错误码
   */
  getExceptionCode() {
    return this.exceptionCode;
  }

  /**
   * 获取错误信息
   * @returns 错误信息
   */
  getErrorMessage() {
    return this.errorMessage;
  }

  /**
   * 获取 HTTP 状态码
   * @returns HTTP状态码
   */
  getStatusCode() {
    return this.statusCode;
  }
}

/**
 * 客户端异常类
 */
export class ClientException extends BussinessException<CLIENT_ERROR_CODE> {}

/**
 * 系统内部异常类
 */
export class SystemException extends BussinessException<SYSTEM_ERROR_CODE> {}

/**
 * 第三方服务异常类
 */
export class ThirdPartyServiceException extends BussinessException<THIRD_PARTY_SERVICE_ERROR_CODE> {}
