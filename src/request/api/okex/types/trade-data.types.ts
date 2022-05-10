export interface TradeData {
  /**
   * 开始时间，Unix时间戳的毫秒数格式，如 1597026383085
   */
  ts: number;

  /**
   * 开盘价格
   */
  o: number;

  /**
   * 最高价格
   */
  h: number;

  /**
   * 最低价格
   */
  l: number;

  /**
   * 收盘价格
   */
  c: number;

  /**
   * 交易量，以张为单位。
   *
   * 如果是衍生品合约，数值为合约的张数。
   *
   * 如果是币币/币币杠杆，数值为交易货币的数量。
   */
  vol: number;

  /**
   * 交易量，以币为单位。
   *
   * 如果是衍生品合约，数值为交易货币的数量。
   *
   * 如果是币币/币币杠杆，数值为计价货币的数量。
   */
  volCcy: number;
}