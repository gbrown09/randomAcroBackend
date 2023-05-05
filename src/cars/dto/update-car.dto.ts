import { PartialType } from '@nestjs/mapped-types';
import { CarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CarDto) {}
