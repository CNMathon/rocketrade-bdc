import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MYSQL_CONFIG, REDIS_CONFIG } from './utils/database-info';
import { BdcService } from './service/bdc/bdc.service';
import { BdcController } from './service/bdc/bdc.controller';
import { CryptoCurrencyData } from './orm/crypto-currency-data.orm';
import { BdcModule } from './service/bdc/bdc.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL_CONFIG.HOST,
      port: MYSQL_CONFIG.PORT,
      username: MYSQL_CONFIG.USERNAME,
      password: MYSQL_CONFIG.PASSWORD,
      database: MYSQL_CONFIG.DATABASE,
      entities: MYSQL_CONFIG.ENTITIES,
      synchronize: MYSQL_CONFIG.SYNCHRONIZE,
      cache: {
        type: 'redis',
        options: {
          host: REDIS_CONFIG.HOST,
          port: REDIS_CONFIG.PORT,
          password: REDIS_CONFIG.PASSWORD,
          db: REDIS_CONFIG.DATABASE,
        },
      },
    }),
    BdcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
