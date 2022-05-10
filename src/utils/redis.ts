import { createClient } from 'redis';
import { REDIS_CONFIG } from './database-info';

export class Redis {
  // constructor() {
  //   createClient({
  //     url: `redis://${REDIS_CONFIG.HOST}:${REDIS_CONFIG.PORT}`,
  //     database: REDIS_CONFIG.DATABASE,
  //     password: REDIS_CONFIG.PASSWORD,
  //   });
  // }
  // protected async connect() {
  //   await this.client.connect();
  // }
  // client: ReturnType<typeof createClient>;
}
