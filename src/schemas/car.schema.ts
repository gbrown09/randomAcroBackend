import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  owner: string;

  @Prop()
  year: number;

  @Prop()
  make: string;

  @Prop()
  model: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
