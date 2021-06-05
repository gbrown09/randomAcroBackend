import { Test, TestingModule } from '@nestjs/testing';
import { BdayController } from './bday.controller';
import { BdayService } from './bday.service';

describe('BdayController', () => {
  let controller: BdayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BdayController],
      providers: [BdayService],
    }).compile();

    controller = module.get<BdayController>(BdayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
