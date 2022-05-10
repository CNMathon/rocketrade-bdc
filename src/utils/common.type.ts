export interface TimeInfo {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export type BarType =
  | '1m'
  | '3m'
  | '5m'
  | '15m'
  | '30m'
  | '1H'
  | '2H'
  | '4H'
  | '6H'
  | '12H'
  | '1D'
  | '1W'
  | '1M'
  | '3M'
  | '6M'
  | '1Y';
