import { Module } from '@nestjs/common';
import { FeatureRequestService } from './feature-request.service';
import { FeatureRequestController } from './feature-request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeatureRequest } from '../schemas/featureRequest.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FeatureRequest', schema: FeatureRequest }], 'featureRequests')],
  controllers: [FeatureRequestController],
  providers: [FeatureRequestService],
})
export class FeatureRequestModule {}
