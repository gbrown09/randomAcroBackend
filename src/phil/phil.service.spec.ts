import { Test, TestingModule } from '@nestjs/testing';
import { PhilService } from './phil.service';

describe('PhilService', () => {
  let service: PhilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhilService],
    }).compile();

    service = module.get<PhilService>(PhilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
