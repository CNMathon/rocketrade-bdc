import { Tasks } from 'src/orm/tasks.orm';
import { CryptoCurrencyData } from '../orm/crypto-currency-data.orm';

export const MYSQL_CONFIG = {
  HOST: '127.0.0.1',
  PORT: 3306,
  USERNAME: 'root',
  PASSWORD: 'root@123456',
  DATABASE: 'rocket_bdc',
  ENTITIES: [CryptoCurrencyData, Tasks],
  SYNCHRONIZE: true,
};

export const REDIS_CONFIG = {
  HOST: '127.0.0.1',
  PORT: 6379,
  DATABASE: 0,
  PASSWORD: 'Xb+^a+-!$T34zH6v',
};
