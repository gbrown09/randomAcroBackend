import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BdayModule } from './bday/bday.module';
import { FeatureRequestModule } from './feature-request/feature-request.module';
import { PhilModule } from './phil/phil.module';
import { CarsModule } from './cars/cars.module';
import { BansModule } from './bans/bans.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/environment/prod.env`,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'bdays',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${configService.get<string>('mongodb.uri')}bdays?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'featureRequests',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${configService.get<string>('mongodb.uri')}featureRequests?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'acro',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${configService.get<string>('mongodb.uri')}/randomAcro?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
    BansModule,
    BdayModule,
    CarsModule,
    FeatureRequestModule,
    PhilModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
