import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { BarType } from 'src/utils/common.type';

export class CreateTaskDTO {
  @ApiProperty({ required: true, description: '产品ID' })
  @IsString()
  readonly instId: string;

  @ApiProperty({ required: true, description: '时间粒度' })
  @IsString()
  readonly bar: BarType;
}
