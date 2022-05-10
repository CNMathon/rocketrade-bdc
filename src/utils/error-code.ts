/**
 * 客户端错误状态码
 */
export enum CLIENT_ERROR_CODE {
  /**
   * 【一级宏观错误】客户端错误
   */
  CLIENT_ERROR = 'A0001',

  /**
   * 【二级宏观错误】用户注册错误
   */
  REGISTER_ERROR = 'A0100',

  /**
   * 用户名不合法
   */
  ILLEGAL_USERNAME = 'A0101',

  /**
   * 用户名已存在
   */
  USER_NAME_EXIST = 'A0102',

  /**
   * 邮箱已存在
   */
  EMAIL_EXIST = 'A0103',

  /**
   * 手机号已存在
   */
  PHONE_EXIST = 'A0104',

  /**
   * 身份证号已存在
   */
  ID_NUMBER_EXIST = 'A0105',

  /**
   * 提供的身份证号不合法
   */
  ILLEGAL_ID_NUMBER = 'A0106',

  /**
   * 【二级宏观错误】用户登录错误
   */
  LOGIN_ERROR = 'A0200',

  /**
   * 密码错误
   */
  PASSWORD_ERROR = 'A0201',

  /**
   * 短信验证码错误
   */
  SMS_VERIFICATION_CODE_ERROR = 'A0202',

  /**
   * 【二级宏观错误】客户端传参错误
   */
  CLIENT_PARAMETER_ERROR = 'A0300',

  /**
   * 客户端未传递必填参数项
   */
  REQUIRED_PARAMETER_NOT_PASSED = 'A0301',

  /**
   * 客户端传递了错误的参数类型
   */
  PARAMETER_TYPE_ERROR = 'A0302',
}

/**
 * 系统内部错误状态码
 */
export enum SYSTEM_ERROR_CODE {
  /**
   * 【一级宏观错误码】系统内部错误
   */
  SYSTEM_ERROR = 'B0001',
}

/**
 * 第三方服务错误状态码
 */
export enum THIRD_PARTY_SERVICE_ERROR_CODE {
  /**
   * 【一级宏观错误码】第三方服务错误
   */
  THIRD_PARTY_SERVICE_ERROR = 'C0001',
}

/**
 * 成功状态码
 */
export enum SUCCESS_CODE {
  /**
   * 一切正常
   */
  SUCCESS = '00000',
}
