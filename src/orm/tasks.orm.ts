import { TASK_TYPE } from 'src/service/bdc/bdc.type';
import { BarType } from 'src/utils/common.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn({ comment: '数据内部ID' })
  id: string;

  @Column({ nullable: false, comment: '产品ID' })
  instId: string;

  @Column({ length: 255, nullable: false, comment: '时间粒度' })
  bar: BarType;

  @Column({ nullable: false, comment: '任务创建时间', type: 'timestamp' })
  createTime: string;

  @Column({ nullable: true, comment: '任务更新时间', type: 'timestamp' })
  updateTime: string;

  @Column({
    nullable: true,
    comment: '最后一次入库内容 (JSON存储)',
  })
  lastUpdateData: string;

  @Column({
    nullable: false,
    comment: '任务状态 (0=准备中, 1=进行中, 2=手动取消, 3=因内部异常被取消)',
  })
  taskStatus: TASK_TYPE;
}
