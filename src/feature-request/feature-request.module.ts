import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeatureRequest, FeatureRequestSchema } from '../schemas/featureRequest.schema';
import { FeatureRequestController } from './feature-request.controller';
import { FeatureRequestService } from './feature-request.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: FeatureRequest.name, schema: FeatureRequestSchema, collection: 'featurerequests' }])],
  controllers: [FeatureRequestController],
  providers: [FeatureRequestService],
})
export class FeatureRequestModule {}
