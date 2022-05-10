import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptoCurrencyData } from 'src/orm/crypto-currency-data.orm';
import { Tasks } from 'src/orm/tasks.orm';
import api, { okexApi } from 'src/request/api';
import { TradeData } from 'src/request/api/okex/types/trade-data.types';
import { sleep } from 'src/utils/common';
import { BarType } from 'src/utils/common.type';
import { Repository } from 'typeorm';
import { TASK_TYPE } from './bdc.type';

@Injectable()
export class BdcService {
  constructor(
    @InjectRepository(CryptoCurrencyData)
    @InjectRepository(Tasks)
    private cryptoCurrencyDataRepository: Repository<CryptoCurrencyData>,
    private tasksRepository: Repository<Tasks>,
  ) {}

  private async getHistoryCandles(day: number) {
    const currentTimestamp = new Date().getTime();
    const historyCandles: TradeData[] = [];

    for (let currentDay = 1; currentDay <= day; currentDay++) {
      console.log('start', currentDay);
      const historyCandlesPromise: Promise<TradeData[]>[] = [];

      for (let index = 1; index <= 1; index++) {
        historyCandlesPromise.push(
          okexApi.getHistoryCandles({
            instId: 'ETC-USDT',
            after: (currentTimestamp - 60 * 60 * 1000 * (index - 1)).toString(),
            before: (currentTimestamp - 60 * 60 * 1000 * index).toString(),
          }),
        );
      }

      const historyCandlesResultList = await Promise.all(historyCandlesPromise);

      historyCandlesResultList.map((hourHistoryCandle) =>
        hourHistoryCandle.map((item) => historyCandles.push(item)),
      );

      console.log('end', currentDay);
      await sleep(1000);
    }

    return historyCandles;
  }

  /**
   * 创建任务
   */
  async createTask(instId: string, bar: BarType) {
    await this.tasksRepository.insert({
      instId,
      createTime: Date(),
      taskStatus: TASK_TYPE.TO_READY,
      bar,
    });

    const { listTime } = (
      await api.okexApi.getInstrumentBasicInfo({
        instType: 'SPOT',
        instId,
      })
    )[0];
  }
}
