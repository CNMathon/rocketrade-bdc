import { Test, TestingModule } from '@nestjs/testing';
import { BdcController } from './bdc.controller';

describe('BdcController', () => {
  let controller: BdcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BdcController],
    }).compile();

    controller = module.get<BdcController>(BdcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
