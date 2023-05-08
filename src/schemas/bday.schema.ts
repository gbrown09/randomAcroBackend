import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BdayDocument = Bday & Document;

@Schema()
export class Bday {
  @Prop()
  userId: string;

  @Prop()
  date: string;
}

export const BdaySchema = SchemaFactory.createForClass(Bday);
