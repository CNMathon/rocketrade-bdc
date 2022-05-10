export interface GetHistoryCandlesProps {
  /**
   * 产品ID，如BTC-USD-200927
   */
  instId: string;

  /**
   * 请求此时间戳之前（更旧的数据）的分页内容，传的值为对应接口的ts
   */
  after?: string;

  /**
   * 请求此时间戳之后（更新的数据）的分页内容，传的值为对应接口的ts
   */
  before?: string;

  /**
   * 时间粒度，默认值1m
   */
  bar?: '1m' | '3m' | '5m' | '15m' | '30m' | '1H' | '2H' | '4H';

  /**
   * 分页返回的结果集数量，最大为100，不填默认返回100条
   */
  limit?: string;
}
