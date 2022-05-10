import { Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BdcService } from './bdc.service';
import { CreateTaskDTO } from './dto/create-task.dto';

@ApiTags('BigDataCenterService')
@Controller('bdc')
export class BdcController {
  constructor(private readonly bdcService: BdcService) {}

  @Post('/createTask')
  @ApiOperation({ summary: '创建任务' })
  createTask(@Query(new ValidationPipe()) query: CreateTaskDTO) {
    return this.bdcService.createTask(query.instId, query.bar);
  }

  @Get('/getTaskList')
  @ApiOperation({ summary: '获取任务列表' })
  getTaskList() {
    return '接口开发中';
  }

  @Get('/stopTask')
  @ApiOperation({ summary: '停止指定任务' })
  stopTask() {
    return '接口开发中';
  }

  // @Post('/test')
  // async test() {
  //   return await this.bdcService.test();
  // }
}
