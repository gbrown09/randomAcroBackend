import { Test, TestingModule } from '@nestjs/testing';
import { FeatureRequestController } from './feature-request.controller';
import { FeatureRequestService } from './feature-request.service';

describe('FeatureRequestController', () => {
  let controller: FeatureRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeatureRequestController],
      providers: [FeatureRequestService],
    }).compile();

    controller = module.get<FeatureRequestController>(FeatureRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
