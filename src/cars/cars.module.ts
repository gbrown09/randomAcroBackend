import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from 'src/schemas/car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema, collection: 'cars' }])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
