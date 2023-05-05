import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cars } from 'src/schemas/cars.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cars', schema: Cars, collection: 'cars' }], 'acro')],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
