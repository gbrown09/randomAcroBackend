import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BdayModule } from './bday/bday.module';
import { FeatureRequestModule } from './feature-request/feature-request.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://randomAcro:acroIsLife@192.168.1.111/bdays?authSource=admin', {
      connectionName: 'bdays',
    }),
    MongooseModule.forRoot('mongodb://randomAcro:acroIsLife@192.168.1.111/featureRequest?authSource=admin', {
      connectionName: 'featureRequests',
    }),
    BdayModule,
    FeatureRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
