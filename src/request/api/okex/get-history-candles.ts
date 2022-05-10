import Axios from '../../config';
import { GetHistoryCandlesProps } from './get-history-candles.type';
import { TradeData } from './types/trade-data.types';

export const getHistoryCandles = async (
  getHistoryCandlesProps: GetHistoryCandlesProps,
) => {
  const axiosResponse = await Axios.get('/api/v5/market/history-candles', {
    params: getHistoryCandlesProps,
  });

  const historyCandles: string[][] = axiosResponse.data.data;

  const historyCandleList: TradeData[] = historyCandles.map((element: any) => {
    const [ts, o, h, l, c, vol, volCcy] = element;
    return { ts, o, h, l, c, vol, volCcy };
  });

  return historyCandleList;
};
