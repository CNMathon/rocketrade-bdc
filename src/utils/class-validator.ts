import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { BussinessException } from 'src/errors/bussiness-exception';
import { BussinessExceptionOptions } from 'src/filters/bussiness-exception.filter.type';
import { IsIdentityCardInZHCNOption } from './class-validator.type';
import { CLIENT_ERROR_CODE } from './error-code';

@ValidatorConstraint()
class IsIdentityCardInZHCNValidator implements ValidatorConstraintInterface {
  exceptionOption: BussinessExceptionOptions;

  constructor(exceptionOption?: BussinessExceptionOptions) {
    this.exceptionOption = exceptionOption;
  }

  async validate(value: any) {
    const IS_VALUE_STRING = typeof value === 'string';
    const reg =
      /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
    const IS_LEGAL_INPUT = IS_VALUE_STRING && reg.test(value);

    if (IS_LEGAL_INPUT) {
      return true;
    } else {
      throw new BussinessException(
        this.exceptionOption.exceptionCode,
        this.exceptionOption.errorMessage,
        this.exceptionOption.statusCode,
      );
    }
  }
}

/**
 * 大陆地区身份证号合法性验证
 * @param validationOptions 自定义的验证规则
 */
export const IsIdentityCardInZHCN = function IsIdentityCardInZHCN(
  options: IsIdentityCardInZHCNOption = {
    exceptionOption: {
      exceptionCode: CLIENT_ERROR_CODE.ILLEGAL_ID_NUMBER,
      errorMessage: '传入的身份证号不合法',
      statusCode: 400,
    },
  },
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: options.validationOptions || {
        message: `${propertyName}必须为合法的身份证号`,
      },
      constraints: [],
      validator: new IsIdentityCardInZHCNValidator(options.exceptionOption),
    });
  };
};
