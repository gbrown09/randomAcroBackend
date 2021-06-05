import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BdayModule } from './bday/bday.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://randomAcro:acroIsLife@192.168.1.111/bdays?authSource=admin'), BdayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
