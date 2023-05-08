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
