import { ValidationOptions } from 'class-validator';
import { BussinessExceptionOptions } from 'src/filters/bussiness-exception.filter.type';

export interface IsIdentityCardInZHCNOption {
  exceptionOption?: BussinessExceptionOptions;
  validationOptions?: ValidationOptions;
}
