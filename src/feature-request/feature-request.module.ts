import { Module } from '@nestjs/common';
import { FeatureRequestService } from './feature-request.service';
import { FeatureRequestController } from './feature-request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeatureRequest } from '../schemas/featureRequest.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FeatureRequest', schema: FeatureRequest }], 'featureRequests')],
  controllers: [FeatureRequestController],
  providers: [FeatureRequestService],
})
export class FeatureRequestModule {}
