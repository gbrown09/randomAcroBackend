import { PartialType } from '@nestjs/mapped-types';
import { CreatePhilDto } from './create-phil.dto';

export class UpdatePhilDto extends PartialType(CreatePhilDto) {}
