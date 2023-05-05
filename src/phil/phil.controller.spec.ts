import { Test, TestingModule } from '@nestjs/testing';
import { PhilController } from './phil.controller';
import { PhilService } from './phil.service';

describe('PhilController', () => {
  let controller: PhilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhilController],
      providers: [PhilService],
    }).compile();

    controller = module.get<PhilController>(PhilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
