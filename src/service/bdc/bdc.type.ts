/**
 * 任务状态类型
 */
export enum TASK_TYPE {
  /**
   * 准备中
   */
  TO_READY = 0,

  /**
   * 进行中
   */
  IN_PROGRESS = 1,

  /**
   * 任务被用户主动取消
   */
  ACTIVELY_CANCEL = 2,

  /**
   * 任务异常结束
   */
  ABONRMAL_EXIT = 3,
}
