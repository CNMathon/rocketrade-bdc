import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CryptoCurrencyData {
  @PrimaryGeneratedColumn({ comment: '数据内部ID' })
  id: string;

  @Column({ nullable: false, comment: '产品ID' })
  instId: string;

  @Column({ nullable: false, comment: '创建时间', type: 'timestamp' })
  time: string;

  @Column({ length: 15, nullable: false, comment: '开盘价' })
  openingPrice: string;

  @Column({ length: 15, nullable: false, comment: '收盘价' })
  closingPrice: string;

  @Column({ length: 255, nullable: false, comment: '最高价' })
  highestPrice: string;

  @Column({
    length: 25,
    nullable: false,
    comment:
      '交易量，以张为单位。如果是衍生品合约，数值为合约的张数；如果是币币/币币杠杆，数值为交易货币的数量。',
  })
  vol: string;

  @Column({
    length: 25,
    nullable: false,
    comment:
      '交易量，以币为单位。如果是衍生品合约，数值为交易货币的数量；如果是币币/币币杠杆，数值为计价货币的数量。',
  })
  volCurrency: string;

  @Column({ length: 255, nullable: false, comment: '时间粒度' })
  bar:
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

  @Column({ length: 255, nullable: false, comment: '数据来源所属平台' })
  platform: string;
}
