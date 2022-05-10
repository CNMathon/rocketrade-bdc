import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoCurrencyData } from 'src/orm/crypto-currency-data.orm';
import { BdcController } from './bdc.controller';
import { BdcService } from './bdc.service';

@Module({
  imports: [TypeOrmModule.forFeature([CryptoCurrencyData])],
  controllers: [BdcController],
  providers: [BdcService],
})
export class BdcModule {}
