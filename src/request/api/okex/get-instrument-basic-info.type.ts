export interface GetInstrumentBasicInfoProps {
  /**
   * 产品类型
   *
   * SPOT=币币
   *
   * MARGIN=币币杠杆
   *
   * SWAP=永续合约
   *
   * FUTURES=交割合约
   *
   * OPTION=期权
   */
  instType: string;

  /**
   * 标的指数，仅适用于交割/永续/期权，期权必填
   */
  uly?: string;

  /**
   * 产品ID
   */
  instId?: string;
}

export interface InstrumentBasicInfo {
  /**
   * 产品类型
   */
  instType: string;

  /**
   * 产品id， 如 BTC-USD-SWAP
   */
  instId: string;

  /**
   * 标的指数，如 BTC-USD，仅适用于交割/永续/期权
   */
  uly: string;

  /**
   * 手续费档位，每个交易产品属于哪个档位手续费
   */
  category: string;

  /**
   * 交易货币币种，如 BTC-USDT 中的 BTC ，仅适用于币币
   */
  baseCcy: string;

  /**
   * 计价货币币种，如 BTC-USDT 中的USDT ，仅适用于币币
   */
  quoteCcy: string;

  /**
   * 盈亏结算和保证金币种，如 BTC 仅适用于交割/永续/期权
   */
  settleCcy: string;

  /**
   * 合约面值，仅适用于交割/永续/期权
   */
  ctVal: string;

  /**
   * 合约乘数，仅适用于交割/永续/期权
   */
  ctMult: string;

  /**
   * 合约面值计价币种，仅适用于交割/永续/期权
   */
  ctValCcy: string;

  /**
   * 期权类型，C或P 仅适用于期权
   */
  optType: string;

  /**
   * 行权价格，仅适用于期权
   */
  stk: string;

  /**
   * 上线日期。
   *
   * Unix时间戳的毫秒数格式，如 1597026383085
   */
  listTime: string;

  /**
   * 交割/行权日期，仅适用于交割和期权。
   *
   * Unix时间戳的毫秒数格式，如 1597026383085
   */
  expTime: string;

  /**
   * 该instId支持的最大杠杆倍数，不适用于币币、期权
   */
  lever: string;

  /**
   * 下单价格精度，如 0.0001
   */
  tickSz: string;

  /**
   * 下单数量精度，如 BTC-USDT-SWAP：1
   */
  lotSz: string;

  /**
   * 最小下单数量
   */
  minSz: string;

  /**
   * 合约类型，仅适用于交割/永续。
   *
   * linear=正向合约
   *
   * inverse=反向合约
   *
   */
  ctType: 'linear' | 'inverse';

  /**
   * 合约日期别名，仅适用于交割。
   *
   * this_week=本周
   *
   * next_week=次周
   *
   * quarter=季度
   *
   * next_quarter=次季度
   */
  alias: 'this_week' | 'next_week' | 'quarter' | 'next_quarter';

  /**
   * 产品状态
   *
   * live=交易中
   *
   * suspend=暂停中
   *
   * preopen=预上线
   *
   * settlement=资金费结算
   */
  state: 'live' | 'suspend' | 'preopen' | 'settlement';
}
