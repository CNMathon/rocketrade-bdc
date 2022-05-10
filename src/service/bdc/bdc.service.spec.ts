import { Test, TestingModule } from '@nestjs/testing';
import { BdcService } from './bdc.service';

describe('BdcService', () => {
  let service: BdcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BdcService],
    }).compile();

    service = module.get<BdcService>(BdcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
